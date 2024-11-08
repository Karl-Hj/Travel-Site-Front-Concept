import { images } from "./SwipeImages";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { useToggle } from "../costumHooks/useToggle";
import { DatePicker } from "../Datepicker";
import { MaskVideo } from "../MaskVideo";

import "../css/maskVideo.css";

interface Width {
  width: number;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
};

export function Beach({ width }: Width) {
  const travelRef = useRef<HTMLDivElement>(null);
  const [showBooking, setShowBooking] = useToggle(false);
  const [settings, setSettings] = useState<Settings>();

  useEffect(() => {
    console.log(width);
    if (width < 960) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      });
    }
  }, [width]);

  //Close travel info box.
  function closeInfo() {
    const current = travelRef.current;
    if (current) {
      current.style.display = "none";
    }
  }

  function displayInfoBody(image: {
    destination: string;
    days: number;
    price: number;
    description: string;
  }) {
    const current = travelRef.current;
    if (current) {
      current.style.display = "block";
      const destination = current.querySelector(
        "td.destination"
      ) as HTMLTableCellElement;
      const days = current.querySelector(
        "td.days-length"
      ) as HTMLTableCellElement;
      const price = current.querySelector("td.price") as HTMLTableCellElement;
      const description = current.querySelector(
        "p.description"
      ) as HTMLParagraphElement;

      if (destination) {
        destination.innerText = image.destination;
      }
      if (days) {
        days.innerText = image.days.toString();
      }
      if (price) {
        price.innerText = "$" + image.price.toString();
      }

      if (description) {
        description.innerText = image.description;
      }
    }
  }

  // useEffect(() => {
  //   console.log("Change detected");
  // }, []);

  return (
    <>
      <MaskVideo />
      <div className="beach-container">
        <div className="mask-container__beach">
          <div className="beach-background" />
        </div>
        <>
          <div className="beach-carusal-container">
            <Slider {...settings}>
              {images.map((image) => {
                {
                  console.log(image.src);
                }
                return (
                  <div key={image.id}>
                    <img
                      className="slides"
                      src={image.src}
                      onClick={() => displayInfoBody(image)}
                    ></img>
                    <div className="beach-text-container">
                      {image.destination}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="travel-information" ref={travelRef}>
            <button className="close-button" onClick={closeInfo}>
              Close
            </button>
            <table>
              <tbody>
                <tr>
                  <th>Destination:</th>
                  <td className="destination"></td>
                </tr>
                <tr>
                  <th>Days:</th>
                  <td className="days-length"></td>
                </tr>
                <tr>
                  <th>Price:</th>
                  <td className="price">$</td>
                </tr>
              </tbody>
            </table>
            <p className="description"></p>
            <button className="book-trip-button" onClick={setShowBooking}>
              Book Trip
            </button>
          </div>
          {showBooking ? <DatePicker setShowBooking={setShowBooking} /> : ""}
        </>
      </div>
    </>
  );
}
