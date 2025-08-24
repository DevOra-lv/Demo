import Navbar from "./components/utils/Navbar";
import LandingSection from "./components/sections/LandingSection/LandingSections";
import PreviousWork from "./components/sections/PreviousWork/PreviousWork";
import ContactSection from "./components/sections/ContanctSection/ContactSection";
export default function Alain() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <LandingSection />
            <PreviousWork />
            <ContactSection />
        </div>
    );
}
