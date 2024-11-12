import "./css/navbar.css";
import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import "./css/home.css";
import "./css/explore.css";
import "./css/display.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Relax } from "./pages/Relax/Relax";

const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

//function for Update and url
function handleScroll(
  activeSection: string,
  setActiveSection: React.Dispatch<React.SetStateAction<string>> //React.Dispatch conclude an update will happen. React.SetStateAction tells which type
) {
  const sections = document.querySelectorAll(".section"); //Gets alla sections

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect(); // For each section get cords
    if (
      rect.top <= window.innerHeight / 2 && //If top of section is half of the viewport
      rect.bottom >= window.innerHeight / 2 //and if half of the section of the viewport
    ) {
      const sectionId = section.getAttribute("id"); //Get Id
      if (sectionId && sectionId !== activeSection) {
        //If not the same as current id update
        setActiveSection(sectionId);
        window.history.pushState(null, "", `/${sectionId}`); // Uppdatera URL med hash
      }
    }
  });
}

export function Navbar() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const exploreRef = useRef<HTMLDivElement | null>(null);
  const relaxRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const scrollHandler = () => handleScroll(activeSection, setActiveSection);
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [activeSection]);

  return (
    <>
      <header className="main-header">
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link to="home" onClick={() => scrollToSection(homeRef)}>
                Home
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="explore" onClick={() => scrollToSection(exploreRef)}>
                Explore
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="relax" onClick={() => scrollToSection(relaxRef)}>
                Relax
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div ref={homeRef} className="section" id="home">
          <Home />
        </div>
        <div ref={exploreRef} className="section" id="explore">
          <Explore />
        </div>
        <div ref={relaxRef} className="section" id="relax">
          <Relax />
        </div>
      </div>
    </>
  );
}
