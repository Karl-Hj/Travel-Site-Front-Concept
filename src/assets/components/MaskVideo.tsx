import TravelVideo from "../videos/beach-medium.mp4";
import "./css/maskVideo.css";

export function MaskVideo() {
  return (
    <div className="mask-video__container">
      <video className="test" autoPlay muted loop>
        <source src={TravelVideo} type="video/mp4"></source>
      </video>
      <svg className="svg-travel">
        <defs>
          <mask id="mask" x="0" y="0" height="100%" width="100%">
            <rect x="0" y="0" height="100%" width="100%" />
            <text
              className="text-travel"
              x="50%"
              y="50%"
              fill="red"
              textAnchor="middle"
            >
              Travel
            </text>
          </mask>
        </defs>
        <rect x="0" y="0" height="100%" width="100%" />
      </svg>
    </div>
  );
}
