/* eslint-disable @typescript-eslint/no-floating-promises */
import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

// Returns three functions: on, off, toggle | And one JSX.Element
export default function PopupWrapper(
  element: JSX.Element,
): [(state: boolean | undefined) => void, JSX.Element] {
  const [shown, setShown] = useState<boolean>(false);

  const [spring, springApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
    config: {
      duration: 500,
    },
  }));

  const [fade, fadeApi] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  }));

  const [hide, hideApi] = useSpring(() => ({
    from: {
      display: '',
    },
    to: {
      display: 'none',
    },
    config: {
      duration: 500,
    },
  }));

  function toggle(state: boolean | undefined) {
    if (state === undefined) {
      setShown((prev) => !prev);
    } else if (state) {
      setShown(true);
    } else {
      setShown(false);
    }
  }

  useEffect(() => {
    if (shown) {
      fadeApi.start({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      });
      hideApi.start({
        from: {
          display: 'none',
        },
        to: {
          display: '',
        },
      });
      springApi.start({
        from: {
          opacity: 0,
          transform: 'scale(0)',
        },
        to: {
          opacity: 1,
          transform: 'scale(1)',
        },
      });
    } else {
      springApi.start({
        from: {
          opacity: 1,
          transform: 'scale(1)',
        },
        to: {
          opacity: 0,
          transform: 'scale(0)',
        },
        onRest: () => {
          fadeApi.start({
            from: {
              opacity: 1,
            },
            to: {
              opacity: 0,
            },
            onRest: () => {
              hideApi.start({
                from: {
                  display: '',
                },
                to: {
                  display: 'none',
                },
              });
            },
          });
        },
      });
    }
  }, [shown]);

  const popup = (
    <animated.div
      style={{ ...fade, ...hide }}
      className="fixed left-0 top-0 z-40 flex size-full flex-col justify-center bg-black"
      onClick={() => {
        toggle(false);
      }}
    >
      <animated.div
        style={spring}
        className="card-color z-50 size-fit max-w-[80%] self-center rounded-lg p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {element}
      </animated.div>
    </animated.div>
  );

  return [toggle, popup];
}
