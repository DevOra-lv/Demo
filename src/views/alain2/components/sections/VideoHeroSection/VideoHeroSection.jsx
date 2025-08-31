import { useEffect, useRef } from "react";

export default function VideoHeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Slow motion effect
        }
    }, []);

    return (
        <section className="relative h-screen overflow-hidden bg-black">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
                <source
                    src="https://videos.pexels.com/video-files/3196220/3196220-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                />
                {/* Fallback for gym content - you can replace this with your own video */}
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-20">
                <div className="max-w-2xl text-white">
                    <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 tracking-wide">
                        ELEVATE
                        <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
                            YOUR GAME
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide">
                        Where strength meets sophistication.
                        <span className="block text-gold-400 font-medium">
                            Every rep tells a story.
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-100 transition-all duration-300 uppercase text-sm">
                            Start Your Journey
                        </button>
                        <button className="px-8 py-4 border border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm">
                            Watch Latest
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-8 left-8 text-white/60 text-sm tracking-widest uppercase">
                Scroll to explore
            </div>

            <div className="absolute top-8 right-8 text-white/40 text-xs tracking-widest uppercase">
                Premium Fitness Content
            </div>
        </section>
    );
}
