import { infoBeach } from "./SwipeImages";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useToggle } from "../../assets/components/costumHooks/useToggle";
import { DatePicker } from "../../assets/components/Datepicker";
import { MoreInformation } from "../../assets/components/MoreInformation";
import { DestinationInfo } from "../../interfaces/interface";
import { MaskVideo } from "../../assets/components/MaskVideo";
import titleVideo from "../../assets/videos/plane.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/home.css";

type Settings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
};

export function Home() {
  const [selectedDesti, setSelectedDesti] = useState<DestinationInfo | null>(
    null
  );
  const [showInformation, setShowInformation] = useToggle(false);
  const [showBooking, setShowBooking] = useToggle(false);
  const [settings, setSettings] = useState<Settings>();

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    console.log("width:" + width);
    if (width < 800) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
      });
    }
    if (width >= 800) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
      });
    }
    if (width >= 1500) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      });
    }
  }, [width]);

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
        <MaskVideo video={titleVideo} section="Travel" name="travel" />
        <div className="mask-container__beach">
          <div className="beach-background" />
        </div>
        <div className="dialog">
          Hello and welcome to a concept for a small travel agancy! Feel free to
          scroll down and explore. Addional content may be added later on.
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
                            <th className="table-display">Info:</th>
                            <td className="travel-info-ellipsis table">
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
