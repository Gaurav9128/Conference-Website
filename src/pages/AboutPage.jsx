import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
import ConferenceStats from "../components/about/ConferenceStats";
import ConferenceBanner from "../components/layout/ConferenceBanner";
import AboutUniversity from "../components/about/AboutUniversity";
import AboutFaculty from "../components/about/AboutFaculty";
import AboutDepartment from "../components/about/AboutDepartment";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <ConferenceStats />
      <AboutUniversity />
      <AboutFaculty />
      <AboutDepartment />
      <ConferenceBanner />
      
      
    </>
  );
};

export default AboutPage;