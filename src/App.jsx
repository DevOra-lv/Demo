import { useState, useEffect } from "react";
import Footer from "./components/utils/Footer/Footer";
import Navbar from "./components/utils/Navbar/Navbar";

export default function App() {
  const images = [
    "https://picsum.photos/1920/1080?random=1",
    "https://picsum.photos/1920/1080?random=2",
    "https://picsum.photos/1920/1080?random=3",
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / images.length) * 100));
        if (loadedCount === images.length) {
          setTimeout(() => setIsLoaded(true), 300);
        }
      };
    });
  }, [images]);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <h1 className="text-6xl font-bold text-white animate-pulse mb-8">
          Loading
        </h1>
        <div className="w-80 h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-semibold mt-2 text-white">{progress}%</span>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <Navbar />

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <h1 className="text-5xl font-bold bg-black/50 px-6 py-3 rounded-xl">
          YOUR CATCHY HOOK
        </h1>
      </section>

      <section
        id="services"
        className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${images[1]})` }}
      >
        <h2 className="text-4xl font-semibold bg-black/50 px-6 py-3 rounded-xl">
          SERVICES THAT YOU OFFER
        </h2>
      </section>

      <section
        id="contacts"
        className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${images[2]})` }}
      >
        <h2 className="text-4xl font-semibold bg-black/50 px-6 py-3 rounded-xl">
          HOW TO GET IN TOUCH WITH YOU
        </h2>
      </section>

      <Footer />
    </div>
  );
}
