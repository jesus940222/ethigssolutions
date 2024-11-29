import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">

      <scroll-container>
        <scroll-page id="HeroSection">
          <HeroSection />
        </scroll-page>
        <scroll-page id="FutureSection">
          <FeatureSection />
        </scroll-page>
        <scroll-page id="Pricing">
          <Pricing />
        </scroll-page>
        <scroll-page id="Testimonials">
          <Testimonials />
        </scroll-page>
        <scroll-page id="Workflow">
          <Workflow />
        </scroll-page>
        <scroll-page id="Footer">
          <Footer />
        </scroll-page>
      </scroll-container>
      </div>
    </>
  );
};

export default App;
