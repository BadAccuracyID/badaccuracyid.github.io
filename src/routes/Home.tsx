import AboutMeComponent from '@/components/aboutme/AboutMe';
import ContactsComponent from '@/components/contact/Contacts';
import ExperiencesComponent from '@/components/experience/Experiences';
import IntroductionComponent from '@/components/introduction/Introduction';
import JumperComponent from '@/components/jumper/Jumper';
import NavBarComponent from '@/components/NavBar/Navbar';
import ProjectsComponent from '@/components/projects/Projects';

export default function Home() {
  return (
    <div className="relative">
      <NavBarComponent />

      <div className="vertical-timeline" />
      <JumperComponent />

      <>
        <IntroductionComponent />
        <AboutMeComponent />
        <ExperiencesComponent />
        <ProjectsComponent />
        <ContactsComponent />
      </>
    </div>
  );
}
