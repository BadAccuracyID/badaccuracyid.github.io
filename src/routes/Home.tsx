import AboutMeComponent from '@/components/aboutme/AboutMe';
import ContactsComponent from '@/components/contact/Contacts';
import ExperiencesComponent from '@/components/experience/Experiences';
import HomeContainer from '@/components/home/HomeContainer';
import IntroductionComponent from '@/components/introduction/Introduction';
import JumperComponent from '@/components/jumper/Jumper';
import NavBarComponent from '@/components/navbar/Navbar';
import ProjectsComponent from '@/components/projects/Projects';
import VerticalTimeline from '@/components/timeline/VerticalTimeline';

export default function Home() {
  return (
    <HomeContainer>
      <NavBarComponent />

      <VerticalTimeline />
      <JumperComponent />

      <>
        <IntroductionComponent />
        <AboutMeComponent />
        <ExperiencesComponent />
        <ProjectsComponent />
        <ContactsComponent />
      </>
    </HomeContainer>
  );
}
