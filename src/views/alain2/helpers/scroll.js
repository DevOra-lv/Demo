const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const navbarHeight = document.querySelector("nav")?.offsetHeight;

  if (section) {
    const sectionTop =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  }
};

export default scrollToSection;
