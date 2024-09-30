import { Button } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  FaDotCircle,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { TbCircleDot } from 'react-icons/tb';
import { Element, Link } from 'react-scroll';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Typed from 'typed.js';

import Experiences from '@/components/experience/experiences';
import Projects from '@/components/projects/projects';

import Navbar from '../components/Navbar.tsx';
import {
  WhyMeAmber,
  WhyMeGreen,
  WhyMePurple,
  WhyMeRed,
} from '../components/whyme/WhyMeCard.tsx';

export default function Home() {
  const [codeString, setCodeString] = useState<string>('');
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    async function load() {
      const read = await fetch('/aboutme.txt');
      const response = await read.text();
      setCodeString(response);
    }

    void load();
  }, []);

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
    <div className="background relative">
      <Navbar />

      <div className="vertical-timeline" />
      <Link
        to="start"
        smooth
        spy
        hashSpy
        duration={500}
        className="vertical-timeline-end flex flex-row items-center gap-2"
      >
        <TbCircleDot
          className={'vertical-timeline-end-dot size-6 bg-purple-700'}
        />
        <Button gradientMonochrome="failure" className="px-4" pill>
          jmp start
        </Button>
      </Link>

      <div>
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

        <Element
          id="aboutme"
          name="aboutme"
          className="flex h-screen flex-col justify-start"
        >
          <Fade fraction={0.15} cascade>
            <div className="left-pad">
              <SyntaxHighlighter language="java" style={atelierHeathDark}>
                {codeString}
              </SyntaxHighlighter>
            </div>

            <Link
              to="experiences"
              smooth
              spy
              hashSpy
              duration={500}
              offset={-50}
              className="left-pad-reverse flex cursor-pointer flex-row items-center bg-red-800 md:justify-end"
            >
              <span className="font-semibold text-gray-400 md:mr-4">
                {'// Break Point'}
              </span>
              <FaDotCircle className="hidden size-8 self-start py-0.5 font-bold text-red-500 md:flex md:self-end" />
            </Link>
          </Fade>
        </Element>

        <Element
          id="experiences"
          name="experiences"
          className="left-pad mt-10 flex min-h-screen flex-col justify-center"
        >
          <div className="flex flex-row gap-3 pl-5">
            <div className="text-xl text-gray-600">
              fun workExperience() {'{'}
            </div>
          </div>

          <Fade fraction={0.4} cascade>
            <Experiences />
          </Fade>

          <div className="flex flex-row gap-3 pl-5">
            <div className="text-xl text-gray-600">{'}'}</div>
          </div>
        </Element>

        <Element
          id="projects"
          name="projects"
          className={'left-pad mt-10 flex min-h-screen flex-col justify-center'}
        >
          <div className="flex flex-row gap-3 pl-5">
            <div className="text-xl text-gray-600">fun projects() {'{'}</div>
          </div>

          <Fade fraction={0.5}>
            <Projects />
          </Fade>

          <div className="flex flex-row gap-3 pl-5">
            <div className="text-xl text-gray-600">{'}'}</div>
          </div>
        </Element>

        <Element
          id={'contacts'}
          name={'contacts'}
          className={'left-pad mt-10 flex min-h-screen flex-col justify-center'}
        >
          <div className="flex flex-row gap-3 pl-5">
            <div className="text-xl text-gray-600">fun contacts() {'{'}</div>
          </div>

          <Fade fraction={0.5} cascade>
            <div
              className={
                'scrollbar-hide flex flex-row gap-12 overflow-scroll px-10 py-4'
              }
            >
              <WhyMePurple
                prop={{
                  title: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/efran-langitan/',
                  icon: <FaLinkedinIn className="text-4xl text-white" />,
                }}
              />
              <WhyMeGreen
                prop={{
                  title: 'Instagram',
                  link: 'https://www.instagram.com/efrnnthel/',
                  icon: <FaInstagram className="text-4xl text-white" />,
                }}
              />
              <WhyMeAmber
                prop={{
                  title: 'GitHub',
                  link: 'https://github.com/BadAccuracyID',
                  icon: <FaGithub className="text-4xl text-white" />,
                }}
              />
              <WhyMeRed
                prop={{
                  title: 'Email',
                  link: 'mailto:efran.langitan@icloud.com',
                  icon: <FaEnvelope className="text-4xl text-white" />,
                }}
              />
            </div>
          </Fade>

          <div className="flex flex-row gap-3 pl-5">
            <div className="text-xl text-gray-600">{'}'}</div>
          </div>
        </Element>
      </div>
    </div>
  );
}
