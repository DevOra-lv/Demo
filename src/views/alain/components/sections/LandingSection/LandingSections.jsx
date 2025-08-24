import scrollToSection from "../../../helpers/scroll";
export default function LandingSection() {
    return (
        <section
            id="home"
            className="relative flex flex-col md:flex-row items-center justify-between mx-auto px-14 py-20 md:py-32 h-screen"
        >
            {/* Left Content */}
            <div className="ms-20 text-center md:text-left max-w-xl">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Bringing Stories to Life with
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                        {" "}
                        Custom Videos
                    </span>
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                    I help entrepreneurs, creators, and brands craft impactful
                    video experiences that connect with their audience and leave
                    a lasting impression.
                </p>

                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <a
                        onClick={() => scrollToSection("contacts")}
                        className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Let’s Work Together
                    </a>
                    <a
                        onClick={() => scrollToSection("portfolio")}
                        className="cursor-pointer px-6 py-3 rounded-full border border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        See My Work
                    </a>
                </div>
            </div>

            {/* Right Visual (Video / Image) */}
            <div className="relative mt-12 md:mt-0 md:ml-12 w-full md:w-1/2">
                {/* Placeholder for video preview */}
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source
                            src="https://videos.pexels.com/video-files/2317031/2317031-hd_1920_1080_30fps.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl rounded-full -z-10"></div>
            </div>
        </section>
    );
}
