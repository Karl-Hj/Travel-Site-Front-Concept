import "./css/datePicker.css";

export function DatePicker() {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  /*Sending in year to check for leap year.
  Fetching the next month (+1) and getting the last date of the month before(currentMonth)*/
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  //Gets the current day of the week
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  console.log("Month :" + currentMonth);
  console.log("Year :" + currentYear);
  console.log("daysInMonth :" + daysInMonth);
  console.log("currentDay :" + firstDayIndex);

  const arrayOfDays: (number | null)[] = Array(firstDayIndex)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, index) => index + 1));
  console.log("Array :" + arrayOfDays);
  return (
    <div className="date-picker-container">
      <div className="date-picker-days-container">
        <div className="date-grid-container">
          {arrayOfDays.map((day, index) => {
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
