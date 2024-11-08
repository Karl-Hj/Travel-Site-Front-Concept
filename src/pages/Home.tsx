import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Beach } from "../assets/components/Beach/Beach";
import "../assets/components/css/beach.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

export function Home() {
  const widthRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function updateWidth() {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="home-container" ref={widthRef}>
      <Beach width={width} />
      <Outlet />
    </div>
  );
}
