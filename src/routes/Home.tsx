import AboutMeComponent from '@/components/aboutme/AboutMe';
import ContactsComponent from '@/components/contact/Contacts';
import ExperiencesComponent from '@/components/experience/Experiences';
import HomeContainer from '@/components/home/container';
import VerticalTimeline from '@/components/home/VerticalTimeline';
import IntroductionComponent from '@/components/introduction/Introduction';
import JumperComponent from '@/components/jumper/Jumper';
import NavBarComponent from '@/components/navbar/Navbar';
import ProjectsComponent from '@/components/neoprojects/Projects';

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
