import * as React from 'react';
import Head from 'next/head';

interface Props {
  mode?: 'outer' | 'inner';
  amount?: 'small' | 'normal';
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Parallax: React.FC<Props> = ({
  mode = 'outer',
  amount = 'normal',
  direction = 'bottom',
  children,
}) => {
  const inner = mode === 'inner';
  const small = amount === 'small';
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const [aboveFold, setAboveFold] = React.useState<boolean>(false);
  let timeout: NodeJS.Timeout;

  const checkAboveFold = () => {
    const scrollY = window.scrollY;
    const windowBottom = scrollY + window.innerHeight;
    const elementBounds = ref.current.getBoundingClientRect();

    if (elementBounds.top <= windowBottom) {
      setAboveFold(true);
      return;
    }

    window.addEventListener('scroll', handleOuter);
    window.addEventListener('resize', handleOuter);

    handleOuter();
    setTimeout(handleOuter, 100);

    return () => {
      window.removeEventListener('scroll', handleOuter);
      window.removeEventListener('resize', handleOuter);
    };
  };

  React.useEffect(() => {
    if (inner) {
      window.addEventListener('scroll', handleInner);
      window.addEventListener('resize', handleInner);

      handleInner();
      setTimeout(handleInner, 100);

      return () => {
        window.removeEventListener('scroll', handleInner);
        window.removeEventListener('resize', handleInner);
      };
    }

    checkAboveFold();
  }, []);

  const handleInner = () => {
    if (!ref || !ref.current) {
      return;
    }

    requestAnimationFrame(() => {
      const windowBottom = window.scrollY + window.innerHeight;
      const elementBounds = ref.current.getBoundingClientRect();
      const maxTransform = small ? 10 : 15;

      const height =
        elementBounds.height >= window.innerHeight
          ? window.innerHeight
          : elementBounds.height;

      const top = elementBounds.top + scrollY;
      const bottom = top + height;

      if (windowBottom >= top) {
        let perc = scrollY / bottom;

        if (perc > 1) {
          perc = 1;
        }

        const transform = maxTransform * perc;
        ref.current.style.willChange = 'transform';

        switch (direction) {
          case 'left':
            ref.current.style.transform = `translate3d(${transform}%, 0, 0)`;
            break;

          case 'right':
            ref.current.style.transform = `translate3d(-${transform}%, 0, 0)`;
            break;

          case 'top':
            ref.current.style.transform = `translate3d(0, ${transform}%, 0)`;
            break;

          case 'bottom':
            ref.current.style.transform = `translate3d(0, -${transform}%, 0)`;
            break;
        }
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => (ref.current.style.willChange = ''), 100);
    });
  };

  const handleOuter = () => {
    if (!ref || !ref.current) {
      return;
    }

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const windowBottom = scrollY + window.innerHeight;
      const elementBounds = ref.current.getBoundingClientRect();

      let maxTransform = 25;
      const maxOpacity = 1;

      if (elementBounds.height >= window.innerHeight) {
        maxTransform = 10;
      }

      const height =
        elementBounds.height >= window.innerHeight
          ? window.innerHeight
          : elementBounds.height;

      const top = elementBounds.top + scrollY;
      const bottom = top + height;

      if (windowBottom >= top && windowBottom <= bottom) {
        const perc = 1 - (windowBottom - top) / (bottom - top);
        const opacity = 1 - maxOpacity * perc;
        const transform = maxTransform * perc;
        ref.current.style.opacity = String(opacity);
        ref.current.style.willChange = 'opacity, transform';

        switch (direction) {
          case 'left':
            ref.current.style.transform = `translate3d(-${transform}%, 0, 0)`;
            break;

          case 'right':
            ref.current.style.transform = `translate3d(${transform}%, 0, 0)`;
            break;

          case 'top':
            ref.current.style.transform = `translate3d(0, -${transform}%, 0)`;
            break;

          case 'bottom':
            ref.current.style.transform = `translate3d(0, ${transform}%, 0)`;
            break;
        }
      }

      if (windowBottom >= bottom) {
        ref.current.style.opacity = '1';
        ref.current.style.transform = `translate3d(0, 0, 0)`;
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => (ref.current.style.willChange = ''), 100);
    });
  };

  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes animateIn {
                0% {
                  opacity: 0;
                  transform: translate3d(0, 100px, 0);
                }

                100% {
                  opacity: 1;
                  transform: translate3d(0, 0, 0);
                }
              }
            `,
          }}
        />
      </Head>

      <div
        className={`w-full h-full ${inner ? 'overflow-hidden' : ''}`}
        style={{
          animation: aboveFold
            ? 'animateIn 350ms cubic-bezier(0.61, 1, 0.88, 1) forwards'
            : undefined,
        }}
      >
        <div
          className='w-full h-full'
          style={{
            width:
              inner && (direction === 'left' || direction === 'right')
                ? '120%'
                : undefined,
            height:
              inner && (direction === 'top' || direction === 'bottom')
                ? '120%'
                : undefined,
            opacity: aboveFold || inner ? 1 : 0,
          }}
          ref={ref}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Parallax;
