import "../css/maskTitle.css";
export function MaskTitle() {
  return (
    <div className="mask-title-container">
      <img src="../../images/jpg/explore/10.jpg"></img>
      <svg className="svg-explore">
        <defs>
          <mask id="maskTitle" x="0" y="0" height="100%" width="100%">
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
