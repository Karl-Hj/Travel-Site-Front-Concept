import { ImagesArray } from "./interfaces/interface";
import "./css/beachSwipe.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useToggle } from "./costumHooks/useToggle";
import { DatePicker } from "./Datepicker";

export function BeachSwipe({ images }: ImagesArray) {
  const travelRef = useRef<HTMLDivElement>(null);
  const [showBooking, setShowBooking] = useToggle(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  function hideInfo() {
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
      const days = current.querySelector("td.days") as HTMLTableCellElement;
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

  return (
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
                <div className="beach-text-container">{image.destination}</div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="travel-information" ref={travelRef} onClick={hideInfo}>
        <button className="close-button">Close</button>
        <table>
          <tbody>
            <tr>
              <th>Destination:</th>
              <td className="destination"></td>
            </tr>
            <tr>
              <th>Days:</th>
              <td className="days-table"></td>
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
  );
}
