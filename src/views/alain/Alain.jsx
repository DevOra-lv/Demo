import Navbar from "./components/utils/Navbar";
import LandingSection from "./components/sections/LandingSection/LandingSections";
import VideoHeroSection from "./components/sections/VideoHeroSection/VideoHeroSection";
import WorkoutShowcaseSection from "./components/sections/WorkoutShowcaseSection/WorkoutShowcaseSection";
import LifestyleSection from "./components/sections/LifestyleSection/LifestyleSection";
import TransformationSection from "./components/sections/TransformationSection/TransformationSection";
import PreviousWork from "./components/sections/PreviousWork/PreviousWork";
import ContactSection from "./components/sections/ContanctSection/ContactSection";

export default function Alain() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <LandingSection />
            <PreviousWork />
            <ContactSection />
            {/* Video Background Sections */}
            <VideoHeroSection />
            <WorkoutShowcaseSection />
            <LifestyleSection />
            <TransformationSection />
        </div>
    );
}
