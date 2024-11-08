import "./css/swipe.css";
import { SwipeFunction } from "./SwipeFunction";
import { images } from "./SwipeImages";

// Controls the swipe funtion on the travel page
export function Swipe() {
  return (
    <div className="swipe-container">
      <SwipeFunction images={images} />
    </div>
  );
}
