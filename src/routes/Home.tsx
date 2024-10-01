import { Button } from 'flowbite-react';
import { TbCircleDot } from 'react-icons/tb';
import { Link } from 'react-scroll';

import AboutMeComponent from '@/components/aboutme/AboutMe';
import ContactsComponent from '@/components/contact/Contacts';
import ExperiencesComponent from '@/components/experience/Experiences';
import IntroductionComponent from '@/components/introduction/Introduction';
import ProjectsComponent from '@/components/projects/Projects';

import Navbar from '../components/Navbar.tsx';

export default function Home() {
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
        <IntroductionComponent />
        <AboutMeComponent />
        <ExperiencesComponent />
        <ProjectsComponent />
        <ContactsComponent />
      </div>
    </div>
  );
}
