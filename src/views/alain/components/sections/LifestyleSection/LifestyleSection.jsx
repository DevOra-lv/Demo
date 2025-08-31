import { useEffect, useRef } from 'react';

export default function LifestyleSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; // Slow motion for lifestyle feel
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
                className="absolute inset-0 w-full h-full object-cover opacity-75"
            >
                <source
                    src="https://videos.pexels.com/video-files/6388879/6388879-uhd_1440_2560_25fps.mp4"
                    type="video/mp4"
                />
                {/* Replace with your lifestyle video */}
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-8 md:px-20">
                <div className="text-center text-white max-w-4xl">
                    <div className="mb-8">
                        <span className="text-gold-400 text-sm tracking-widest uppercase font-medium">
                            The Lifestyle
                        </span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-wide">
                        BEYOND THE
                        <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
                            WORKOUT
                        </span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                        Discover the art of living with purpose. 
                        <span className="block text-gold-400 font-medium mt-4">
                            Where discipline meets luxury.
                        </span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-gold-400 text-2xl font-bold">01</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Mindset</h3>
                            <p className="text-gray-400 text-sm">Mental strength is the foundation</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-gold-400 text-2xl font-bold">02</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Nutrition</h3>
                            <p className="text-gray-400 text-sm">Fuel your transformation</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 border-2 border-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-gold-400 text-2xl font-bold">03</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Recovery</h3>
                            <p className="text-gray-400 text-sm">Rest is part of the process</p>
                        </div>
                    </div>

                    <button className="px-8 py-4 bg-gold-500 text-black font-semibold tracking-wide hover:bg-gold-400 transition-all duration-300 uppercase text-sm">
                        Explore Lifestyle
                    </button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-8 w-1 h-16 bg-gold-400 opacity-50"></div>
            <div className="absolute top-1/4 right-8 w-1 h-16 bg-gold-400 opacity-50"></div>
            <div className="absolute bottom-1/4 left-8 w-1 h-16 bg-gold-400 opacity-50"></div>
            <div className="absolute bottom-1/4 right-8 w-1 h-16 bg-gold-400 opacity-50"></div>
        </section>
    );
} 