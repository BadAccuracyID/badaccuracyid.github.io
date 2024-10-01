import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaDotCircle } from 'react-icons/fa';
import { Element, Link } from 'react-scroll';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AboutMeComponent = () => {
  const [codeString, setCodeString] = useState<string>('');

  useEffect(() => {
    async function load() {
      const read = await fetch('/aboutme.txt');
      const response = await read.text();
      setCodeString(response);
    }

    void load();
  }, []);

  return (
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
  );
};

export default AboutMeComponent;
