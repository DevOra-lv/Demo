import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import FooterIcon from "../FooterIcon/FooterIcon";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector("nav")?.offsetHeight;
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-black text-white px-6 py-4 text-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-5 flex-wrap">
          <div
            className="flex flex-col items-center space-x-3 cursor-pointer mt-5"
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="text-2xl">YOUR LOGO</div>
            <span className="font-sans text-xl">YOUR COMPANY NAME</span>
          </div>

          <div className="flex flex-col items-center text-left mt-5">
            <h4 className="text-gray-400 mb-2">Quick links</h4>
            <div className="flex gap-3">
              <a
                onClick={() => scrollToSection("home")}
                className="text-gray-500 text-sm mb-1 hover:text-gray-400 cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="text-gray-500 text-sm mb-1 hover:text-gray-400 cursor-pointer"
              >
                Your services
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <h4 className="text-gray-400 mb-2">Socials</h4>
            <div className="flex gap-3">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitterX} />
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-xs text-center md:text-right mt-5">
          &copy; All rights reserved
        </p>
      </div>
    </footer>
  );
}
