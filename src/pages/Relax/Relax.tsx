import { useState } from "react";
import { useToggle } from "../../assets/components/costumHooks/useToggle";
import { Display } from "../../assets/components/Display";
import { MaskVideo } from "../../assets/components/MaskVideo";
import { MoreInformation } from "../../assets/components/MoreInformation";
import { DestinationInfo } from "../../interfaces/interface";
import { infoRelax } from "./releaxDestinations";
import video from "../../assets/videos/beach-medium.mp4";
import { DatePicker } from "../../assets/components/Datepicker";
import "../../css/relax.css";

export function Relax() {
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
    <div className="relax-container">
      <MaskVideo video={video} section="Relax" name="relax" />
      <div className="relax-mask">
        <div className="relax-background" />
      </div>

      <Display infoArray={infoRelax} moreInformation={moreInformation} />

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
