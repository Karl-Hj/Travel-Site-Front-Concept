import { useEffect, useReducer } from "react";
import "./css/datePicker.css";
interface Action {
  type: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 0:
      return 31;
    case 1:
      return 28;
    case 2:
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
      return 31;
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 30;
    case 11:
      return 31;
    default:
      return state;
  }
}

export function DatePicker() {
  const currentMonth = new Date().getMonth();
  const [amountOfDays, dispatch] = useReducer(reducer, currentMonth);

  //   Loads array with current Month.
  useEffect(() => {
    dispatch({ type: currentMonth });
  }, [currentMonth]);

  const days: number[] = Array(amountOfDays).fill(0);

  return (
    <div className="date-picker-container">
      <div className="date-picker-days-container">
        {days.map((day, index) => {
          return (
            <div className="days" key={index}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
