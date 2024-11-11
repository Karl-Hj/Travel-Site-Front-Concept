import { useToggle } from "../costumHooks/useToggle";
import { info } from "./exploreDestination";
import { DestinationInfo } from "../interfaces/interface";
import { useState } from "react";
import { DatePicker } from "../Datepicker";
import { MoreInformation } from "../MoreInformation";
import { MaskTitle } from "./MaskTitle";

export function Explore() {
  const [showInformation, setShowInformation] = useToggle(false);
  const [selectedDesti, setSelectedDesti] = useState<DestinationInfo | null>(
    null
  );
  const [showBooking, setShowBooking] = useToggle(false);

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
      <div className="explore-container">
        <div className="explore-mask">
          <div className="explore-background" />
        </div>
        <div className="explore-grid-container">
          <div className="grid-destination-container">
            {info.map((image, index) => {
              return (
                <div className="destination-container" key={index}>
                  <div className="destination">
                    <img className="img-explore" src={image.src} />
                    <table className="explore-info-container">
                      <tbody>
                        <tr>
                          <th>Place:</th>
                          <td>{image.destination}</td>
                        </tr>
                        <tr>
                          <th>Price:</th>
                          <td>${image.price}</td>
                        </tr>
                        <tr>
                          <th>Info</th>
                          <td className="travel-info-ellipsis">
                            {image.description}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      className="button-show-information-explore"
                      onClick={() => moreInformation(image)}
                    >
                      More Information
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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
      </div>
    </>
  );
}
