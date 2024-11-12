import "../../css/maskVideo.css";
import { VideoProps } from "../../interfaces/interface";

export function MaskVideo({ video, section, name }: VideoProps) {
  return (
    <div className={`mask-${name}-container`}>
      <video className={`video-${name}`} autoPlay muted loop>
        <source src={video} type="video/mp4"></source>
      </video>
      <svg className={`svg-${name}`}>
        <defs>
          <mask id={`mask-${name}`} x="0" y="0" height="100%" width="100%">
            <rect
              className={`rect-${name}`}
              x="0"
              y="0"
              height="100%"
              width="100%"
            />
            <text
              className={`text-${name}`}
              x="50%"
              y="50%"
              fill="red"
              textAnchor="middle"
            >
              {section}
            </text>
          </mask>
        </defs>
        <rect
          className={`rect-${name}`}
          x="0"
          y="0"
          height="100%"
          width="100%"
        />
      </svg>
    </div>
  );
}
