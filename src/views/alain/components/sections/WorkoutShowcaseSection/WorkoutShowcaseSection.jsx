import { useEffect, useRef } from 'react';

export default function WorkoutShowcaseSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slightly slowed for dramatic effect
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
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            >
                <source
                    src="https://videos.pexels.com/video-files/4438080/4438080-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                />
                {/* Replace with your workout video */}
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-end h-full px-8 md:px-20">
                <div className="max-w-xl text-white text-right">
                    <div className="mb-6">
                        <span className="text-gold-400 text-sm tracking-widest uppercase font-medium">
                            Featured Workout
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-wide">
                        PUSH YOUR
                        <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
                            LIMITS
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
                        Experience the intensity of professional training. 
                        <span className="block text-gold-400 font-medium mt-2">
                            Every movement is precision.
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-end">
                        <button className="px-6 py-3 bg-gold-500 text-black font-semibold tracking-wide hover:bg-gold-400 transition-all duration-300 uppercase text-sm">
                            Watch Full Session
                        </button>
                        <button className="px-6 py-3 border border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm">
                            Download Program
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex justify-end gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold text-gold-400">45</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Minutes</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gold-400">12</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Exercises</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gold-400">9.2</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Difficulty</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold-400 opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold-400 opacity-30"></div>
        </section>
    );
} 