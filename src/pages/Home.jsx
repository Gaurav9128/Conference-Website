import NoticeBar from "../components/layout/NoticeBar";
import HeroSection from "../components/home/HeroSection";
import AssociationCard from "../components/home/AssociationCard";
import PublicationCard from "../components/home/PublicationCard";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import ConferenceBanner from "../components/layout/ConferenceBanner";
import CommitteeSection from "../components/home/CommitteeSection";
import PartnersSection from "../components/home/PartnersSection";
import ConferenceTracks from "../components/ConferenceTracks/ConferenceTracks";

const Home = () => {
  return (
    <>
      <NoticeBar />
      <HeroSection />
      <AssociationCard />
      <PublicationCard />
      <AboutSection />
      <ConferenceTracks />
      <PartnersSection />
      <CommitteeSection />
      <ContactSection />
      <ConferenceBanner />
    
    </>
  );
};

export default Home;