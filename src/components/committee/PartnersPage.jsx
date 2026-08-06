
//import ConferenceBanner from "../layout/ConferenceBanner";
import CommitteeSection from "./CommitteeSection";
import PartnersHero from "./PartnersHero";


const PartnersPage = () => {
  return (
    <>
       <PartnersHero />
       
      <div className="-mt-16">
        <CommitteeSection />
        {/* <ConferenceBanner /> */}
        
      </div>
    </>
  );
};

export default PartnersPage;