import { useEffect, useRef } from 'react';

export default function TransformationSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6; // Very slow for dramatic effect
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
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source
                    src="https://videos.pexels.com/video-files/5752365/5752365-uhd_1440_2560_25fps.mp4"
                    type="video/mp4"
                />
                {/* Replace with your transformation video */}
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-20">
                {/* Left Side */}
                <div className="text-white max-w-md">
                    <div className="mb-6">
                        <span className="text-gold-400 text-sm tracking-widest uppercase font-medium">
                            Real Results
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-wide">
                        YOUR
                        <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
                            TRANSFORMATION
                        </span>
                    </h2>
                    
                    <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                        Every journey begins with a single step. 
                        <span className="block text-gold-400 font-medium mt-2">
                            Your story starts here.
                        </span>
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                            <span className="text-gray-300">Personalized Programs</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                            <span className="text-gray-300">Expert Guidance</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                            <span className="text-gray-300">Proven Results</span>
                        </div>
                    </div>

                    <button className="px-6 py-3 bg-gold-500 text-black font-semibold tracking-wide hover:bg-gold-400 transition-all duration-300 uppercase text-sm">
                        Start Your Journey
                    </button>
                </div>

                {/* Right Side - Stats */}
                <div className="text-white text-right">
                    <div className="grid grid-cols-2 gap-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-bold text-gold-400 mb-2">500+</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Transformations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-bold text-gold-400 mb-2">98%</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-bold text-gold-400 mb-2">12</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Weeks Average</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-6xl font-bold text-gold-400 mb-2">24/7</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-12 max-w-sm">
                        <p className="text-gray-300 italic mb-4">
                            "This program changed my life. The results speak for themselves."
                        </p>
                        <div className="text-right">
                            <div className="text-gold-400 font-semibold">Sarah Johnson</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Client</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-gold-400 to-transparent opacity-50"></div>
        </section>
    );
} 