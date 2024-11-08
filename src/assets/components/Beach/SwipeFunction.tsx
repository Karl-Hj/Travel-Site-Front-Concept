import Slider from "react-slick";
import { ImagesArray } from "../interfaces/interface";
import { useToggle } from "../costumHooks/useToggle";
import "../css/datePicker.css";
import { DatePicker } from "../Datepicker";

export function SwipeFunction({ images }: ImagesArray) {
  const [isActive, ToggleExpand] = useToggle(false);
  const [showBooking, setShowBooking] = useToggle(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="small-device-container">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="carousel-container " key={image.id}>
              <img src={image.src} alt={image.alt} />

              <div className="text-container">
                <table>
                  <tbody>
                    <tr>
                      <th>Destination:</th>
                      <td>{image.destination}</td>
                    </tr>
                    <tr>
                      <th>Days:</th>
                      <td>{image.days}</td>
                    </tr>
                    <tr>
                      <th>Price:</th>
                      <td>${image.price}</td>
                    </tr>
                    <tr>
                      <th>Description:</th>
                      <td className="text-description">{image.description}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="travel-button" onClick={ToggleExpand}>
                  More Information
                </button>
              </div>
              {isActive ? (
                <div className="expand">
                  <button className="close-button" onClick={ToggleExpand}>
                    Close
                  </button>

                  <table className="expand-table">
                    <tbody>
                      <tr className="expand-tr">
                        <th className="expand-th">Destination:</th>
                        <td className="expand-td">{image.destination}</td>
                      </tr>
                      <tr className="expand-tr">
                        <th className="expand-th">Price:</th>
                        <td className="expand-td">${image.price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="expand-description__container">
                    <p>{image.description}</p>
                  </div>
                  <button className="book-button" onClick={setShowBooking}>
                    Book Trip!
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </Slider>

      {showBooking !== false ? (
        <div className="small-booking-container">
          <DatePicker setShowBooking={setShowBooking} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
