import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const sections = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Contacts", id: "contacts" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const navbarHeight = document.querySelector("nav")?.offsetHeight;
        if (section) {
            const sectionTop =
                section.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className="bg-black text-white px-6 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                {/* Left Side: Logo */}
                <div
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() =>
                        document
                            .getElementById("home")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    YOUR LOGO
                </div>

                {/* Right Side (Desktop) */}
                <div className="hidden md:flex space-x-6">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="cursor-pointer text-gray-300 hover:text-white transition"
                        >
                            {section.name}
                        </a>
                    ))}
                </div>

                {/* Right Side (Mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-3">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="cursor-pointer text-gray-300 hover:text-white transition"
                        >
                            {section.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
