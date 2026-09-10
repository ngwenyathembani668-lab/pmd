import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PillarCategories from "../components/PillarCategories";
import TeamShowcase from "../components/TeamShowcase";
import WhyChoosePMD from "../components/WhyChoosePMD";
import WorkGallery from "../components/WorkGallery";


const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">


      <Header />
      <HeroSection />
      <PillarCategories />
      <TeamShowcase />
      <WorkGallery />
      <WhyChoosePMD />
      <Footer />

      
    </div>
  );
};

export default Home;
