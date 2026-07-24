import ContactHero from "./ContactHero";
import ContactTeam from "./ContactTeam";
import VenueFacilities from "./VenueFacilities";
import ConferenceBanner from "../layout/ConferenceBanner";
import VenueSection from "./VenueSection";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactTeam />
      <VenueSection />
      <VenueFacilities />
      <ConferenceBanner />
    </>
  );
};

export default ContactPage;