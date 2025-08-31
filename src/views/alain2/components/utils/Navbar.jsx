export default function Navbar() {
    const sections = [{ name: "Contacts", id: "contacts" }];
    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 px-6 py-8 
                       text-gray-400 transition-colors duration-300 ease-in-out"
        >
            <div className="mx-auto px-8 w-full flex justify-between items-center">
                <div
                    className="text-2xl font-semibold cursor-pointer hover:text-white transition-colors duration-300 ease-in-out"
                    onClick={() => scrollToSection("home")}
                >
                    alain.jan.th
                </div>
                <div className="hidden md:flex space-x-6 text-lg font-semibold">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out"
                        >
                            {section.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
