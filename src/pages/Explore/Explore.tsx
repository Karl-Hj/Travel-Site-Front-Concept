import { useToggle } from "../../assets/components/costumHooks/useToggle";
import { info } from "./exploreDestination";
import { DestinationInfo } from "../../interfaces/interface";
import { useState } from "react";
import { DatePicker } from "../../assets/components/Datepicker";
import { MoreInformation } from "../../assets/components/MoreInformation";
import video from "../../assets/videos/explore-1.mp4";
import { MaskVideo } from "../../assets/components/MaskVideo";
import { Display } from "../../assets/components/Display";
import "../../css/explore.css";

export function Explore() {
  const [showInformation, setShowInformation] = useToggle(false);
  const [selectedDesti, setSelectedDesti] = useState<DestinationInfo | null>(
    null
  );
  const [showBooking, setShowBooking] = useToggle(false);

  function moreInformation(element: DestinationInfo) {
    setShowInformation();
    setSelectedDesti(element);
  }
  function closeInfo() {
    setShowInformation();
  }
  function bookButton() {
    setShowBooking();
  }

  return (
    <div className="explore-container">
      <MaskVideo video={video} section="Explore" name="explore" />
      <div className="explore-mask">
        <div className="explore-background" />
      </div>

      <Display infoArray={info} moreInformation={moreInformation} />

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
  );
}
