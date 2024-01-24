import Awaits from "@/Components/Awaits";
import Benefits from "@/Components/Benefits";
import Benner from "@/Components/Benner";
import Faq_sec from "@/Components/Faq_sec";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Logos_move from "@/Components/Logos_move";
import NavBar from "@/Components/NavBar";
import Pricing from "@/Components/Pricing";
import Slider from "@/Components/Slider";
import Started_Now from "@/Components/Started_Now";
import Tabs_sec from "@/Components/Tabs";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Benner />
        <Logos_move />
        <Features />
        <Started_Now />
        <Benefits />
        <Tabs_sec />
        <Pricing />
        <Slider />
        <Awaits />
        <Faq_sec />
        <Footer />
      </div>
    </>
  );
}
