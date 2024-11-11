import { infoBeach } from "./SwipeImages";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useToggle } from "../costumHooks/useToggle";
import { DatePicker } from "../Datepicker";
import { MoreInformation } from "../MoreInformation";
import { DestinationInfo } from "../interfaces/interface";
import { MaskVideo } from "../MaskVideo";

interface BeachProps {
  width: number;
}

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
};

export function Beach({ width }: BeachProps) {
  const [selectedDesti, setSelectedDesti] = useState<DestinationInfo | null>(
    null
  );
  const [showInformation, setShowInformation] = useToggle(false);
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
  }, []);

  //Close travel info box.
  function moreInformation(image: DestinationInfo) {
    setShowInformation();
    setSelectedDesti(image);
  }
  function closeInfo() {
    setShowInformation();
  }
  function bookButton() {
    setShowBooking();
  }

  return (
    <>
      <div className="beach-container">
        <MaskVideo />
        <div className="mask-container__beach">
          <div className="beach-background" />
        </div>
        <>
          <div className="beach-carusal-container">
            <Slider {...settings}>
              {infoBeach.map((image) => {
                return (
                  <div key={image.id}>
                    <img
                      className="slides"
                      src={image.src}
                      onClick={() => moreInformation(image)}
                    ></img>
                    <div className="beach-text-container">
                      <table>
                        <tbody>
                          <tr>
                            <th>Destination:</th>
                            <td>{image.destination}</td>
                          </tr>
                          <tr>
                            <th>Price:</th>
                            <td>${image.price}</td>
                          </tr>
                          <tr>
                            <th>Info:</th>
                            <td className="travel-info-ellipsis">
                              {image.description}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button
                        className="button-show-information"
                        onClick={() => moreInformation(image)}
                      >
                        More Information
                      </button>
                      {}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          {showInformation ? (
            <MoreInformation
              selectedDesti={selectedDesti}
              bookButton={bookButton}
              closeInfo={closeInfo}
            />
          ) : (
            ""
          )}
          {showBooking ? <DatePicker setShowBooking={setShowBooking} /> : ""}
        </>
      </div>
    </>
  );
}
