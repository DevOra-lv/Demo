import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function PreviousWork() {
    const images = [
        "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
        "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
        "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    ];

    const [percentage, setPercentage] = useState(0);

    // Each step moves by 12.5% (100 / 8 images)
    const stepSize = 100 / images.length;
    const maxPercentage = 0;
    const minPercentage = -200;

    const handlePrev = () => {
        setPercentage((prev) => Math.min(prev + stepSize, maxPercentage));
    };

    const handleNext = () => {
        setPercentage((prev) => Math.max(prev - stepSize, minPercentage));
    };

    return (
        <section id="portfolio" className="h-screen bg-black relative">
            <div className="w-full px-8 ">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                    Previous work experience
                </h1>
            </div>

            {/* Image Track Container */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="flex gap-4 absolute left-1/4 top-1/2 select-none transition-transform duration-[1200ms] ease-out"
                    style={{
                        transform: `translate(${percentage}%, -50%)`,
                    }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            draggable={false}
                            className="w-[40vmin] h-[56vmin] object-cover transition-all duration-[1200ms] ease-out"
                            style={{
                                objectPosition: `${100 + percentage}% center`,
                            }}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    disabled={percentage >= maxPercentage}
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                    <BsArrowLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    disabled={percentage <= minPercentage}
                    className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                    <BsArrowRight size={24} />
                </button>
            </div>
        </section>
    );
}
