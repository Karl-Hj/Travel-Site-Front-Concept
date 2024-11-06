import { BeachSwipe } from "./BeachSwipe";
import { images } from "./SwipeImages";

export function Beach() {
  return (
    <>
      <div className="beach-container">
        <div className="mask-container__beach">
          <div className="beach-background" />
        </div>
        <BeachSwipe images={images} />
      </div>
    </>
  );
}
