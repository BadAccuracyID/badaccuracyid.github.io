import { useEffect, useRef } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { Element, Link } from 'react-scroll';
import Typed from 'typed.js';

const IntroductionComponent = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed: Typed = new Typed(typedRef.current, {
      strings: [
        'Web Developer',
        'Java Developer',
        'Software Engineer',
        'Student',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000,
      smartBackspace: false,
      shuffle: true,
      loop: true,
    });
    return (): void => {
      typed.destroy();
    };
  }, []);

  return (
    <Element
      id="start"
      name="start"
      className="left-pad relative flex h-screen flex-col justify-center"
    >
      <div className="flex flex-col pl-5">
        <div className="flex flex-row gap-3">
          <div className="text-xl text-gray-600">fun start() {'{'}</div>
        </div>

        <div className="flex flex-col pl-5">
          <div className="flex flex-row gap-3">
            <div className="text-2xl text-gray-400">
              Hello,&nbsp;
              <span className="text-red-500">World</span>!
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-3">
            <span className="text-4xl font-bold text-white md:text-6xl">
              My name is
            </span>
            <span className="text-5xl font-bold text-purple-800 md:text-6xl">
              Efran Nathanael
            </span>
          </div>

          <div className="mt-2 flex flex-row gap-3 md:mt-4">
            <div className="typing-animation-container">
              <span className="text-2xl text-white">I&apos;m a </span>
              <span
                ref={typedRef}
                className="typing-animation text-2xl text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <div className="text-xl text-gray-600">{'}'}</div>
        </div>
      </div>

      {/* Arrow down to scroll */}
      <Link
        to="aboutme"
        smooth
        spy
        hashSpy
        duration={500}
        offset={-50}
        className="absolute bottom-10 left-1/2 cursor-pointer"
      >
        <SlArrowDown className="next-arrow animate-bounce font-bold text-white" />
      </Link>
    </Element>
  );
};

export default IntroductionComponent;
