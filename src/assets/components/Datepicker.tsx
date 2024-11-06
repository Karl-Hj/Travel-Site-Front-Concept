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
  // Get the day of the first date of the month
  const year = new Date().getFullYear();
  const firstDayOfMonth = new Date(year, currentMonth, 1).getDay();
  console.log(currentMonth);

  const [amountOfDays, dispatch] = useReducer(reducer, currentMonth);

  //   Loads array with current Month.
  useEffect(() => {
    dispatch({ type: currentMonth });
  }, [currentMonth]);

  const days: number[] = Array(firstDayOfMonth)
    .fill(null)
    .concat(Array.from({ length: amountOfDays }, (_, index) => index + 1));

  return (
    <div className="date-picker-container">
      <div className="date-picker-days-container">
        <div className="date-grid-container">
          {days.map((day, index) => {
            return (
              <div className="days" key={index}>
                {day !== null ? day : ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
