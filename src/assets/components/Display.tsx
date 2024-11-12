import { ArrayDisplay } from "../../interfaces/interface";
import "../../css/display.css";
export function Display({
  infoArray,

  moreInformation,
}: ArrayDisplay) {
  return (
    <div className="explore-grid-container">
      <div className="grid-destination-container">
        {infoArray.map((element, index) => {
          return (
            <div className="destination-container" key={index}>
              <div className="destination">
                <img className="img-explore" src={element.src} />
                <table className="explore-info-container">
                  <tbody>
                    <tr>
                      <th>Place:</th>
                      <td>{element.destination}</td>
                    </tr>
                    <tr>
                      <th>Price:</th>
                      <td>${element.price}</td>
                    </tr>
                    <tr>
                      <td className="info-ellipsis">{element.description}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="button-show-information-explore"
                  onClick={() => moreInformation(element)}
                >
                  More Information
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
