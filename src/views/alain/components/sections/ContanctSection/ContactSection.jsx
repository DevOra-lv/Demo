export default function ContactSection() {
    return (
        <section
            id="contacts"
            className="h-screen flex flex-col items-center justify-center bg-black text-white px-6"
        >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Get in Touch
            </h2>
            <p className="text-gray-400 text-lg mb-10 text-center">
                Feel free to reach out via email or connect with me on social
                media.
            </p>

            {/* Email */}
            <a
                href="mailto:your@email.com"
                className="text-xl md:text-2xl font-semibold hover:text-gray-300 transition mb-8"
            >
                your@email.com
            </a>

            {/* Social Links */}
            <div className="flex space-x-6 text-2xl">
                <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    X
                </a>
                <a
                    href="https://www.instagram.com/alain.jan.th/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    Instagram
                </a>
                <a
                    href="https://linkedin.com/in/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
