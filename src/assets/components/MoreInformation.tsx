import { MoreInformationProps } from "../../interfaces/interface";
import "../../css/moreInformation.css";
// Shows more information about the selected trip
export function MoreInformation({
  selectedDesti,
  bookButton,
  closeInfo,
}: MoreInformationProps) {
  return (
    <div className="more-information-container">
      <button className="close-info-button" onClick={closeInfo}>
        Close
      </button>
      <img className="more-information-image" src={selectedDesti?.src} />
      <p>Destination: {selectedDesti?.destination}</p>
      <p>Price: ${selectedDesti?.price}</p>
      <p>Information: {selectedDesti?.description}</p>
      <button className="book-trip-button" onClick={bookButton}>
        Book Trip
      </button>
    </div>
  );
}
