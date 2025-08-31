import Navbar from "./components/utils/Navbar";
import VideoHeroSection from "./components/sections/VideoHeroSection/VideoHeroSection";
import WorkoutShowcaseSection from "./components/sections/WorkoutShowcaseSection/WorkoutShowcaseSection";
import LifestyleSection from "./components/sections/LifestyleSection/LifestyleSection";
import TransformationSection from "./components/sections/TransformationSection/TransformationSection";

export default function Alain2() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <Navbar />
            {/* Video Background Sections */}
            <VideoHeroSection />
            <WorkoutShowcaseSection />
            <LifestyleSection />
            <TransformationSection />
        </div>
    );
}
