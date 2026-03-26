import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Itinerary from "../components/Itinerary";
import LocationExplorer from "../components/LocationExplorer";
import VideoSection from "../components/VideoSection";
import BudgetSection from "../components/BudgetSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <Navbar />
        <Hero />
      </div>
      <Itinerary />
      <BudgetSection />
      <LocationExplorer />
      <VideoSection />
      <Footer />
    </main>
  );
}
