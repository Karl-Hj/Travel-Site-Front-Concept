import { useEffect, useState } from "react";
import "./css/datePicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DateButtonValidation } from "./DateButtonValidation";
import { DatePickerProps } from "./interfaces/interface";

export function DatePicker({
  currentMonth,
  currentYear,
  selectedDate,
  setCurrentMonth,
  setCurrentYear,
  setSelectedDate,
}: DatePickerProps) {
  const [currentMonthDisplay, setCurrentMonthDisplay] = useState<string>("");
  const [currentYearDisplay, setCurrentYearDisplay] = useState<number>();

  const [daysInMonth, setDaysInMonth] = useState<number>(0);
  const [firstDayIndex, setFirstDayIndex] = useState<number>(0);
  const [arrayOfDates, setArrayOfDates] = useState<(number | null)[]>([]);
  const monthFormater = new Intl.DateTimeFormat("en-US", { month: "long" });

  const [selectedDateDisplay, setSelectedDateDisplay] = useState<string>(""); // Shows selected  dd/mm/yyyy to user

  useEffect(() => {
    /*Sending in year to check for leap year.
  Fetching the next month (+1) and getting the last date of the month before(currentMonth)*/
    const daysInMonthValue = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    setDaysInMonth(daysInMonthValue);

    //Gets the current day of the week
    const firstDayIndexValue = new Date(currentYear, currentMonth, 1).getDay();
    setFirstDayIndex(firstDayIndexValue);

    const arrayOfDatesValue: (number | null)[] = Array(firstDayIndex)
      .fill(null)
      .concat(Array.from({ length: daysInMonth }, (_, index) => index + 1));
    setArrayOfDates(arrayOfDatesValue);

    const monthMountDisplay = monthFormater.format(
      new Date(currentYear, currentMonth)
    );
    setCurrentMonthDisplay(monthMountDisplay);
    setCurrentYearDisplay(currentYear);
  }, [currentMonth, currentYear, firstDayIndex]);

  function decrementMonth() {
    // if currentMonth is 0 (Jan) reset month to december
    if (currentMonth === 0) {
      setCurrentMonth(() => 11);
      setCurrentYear((prevYear) => prevYear - 1); // Decrement year by 1
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1); // Decrement month by 1
    }
  }
  function incrementMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(() => 0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  }
  /* Gets the targeted date, controlls css class and saves all date data */
  function selectDate(e: React.MouseEvent) {
    const clearActiveClass = document.querySelectorAll(".active-date");
    clearActiveClass.forEach((date) => {
      date.classList.remove("active-date");
    });
    const targetDate = e.currentTarget as HTMLDivElement;
    if (targetDate.innerText === "") return;

    targetDate.classList.add("active-date");
    const activeDate = targetDate.innerText;
    const wholeDate = `${activeDate}/${currentMonth}/${currentYear}`;

    setSelectedDateDisplay(wholeDate);
    setSelectedDate(parseInt(activeDate));
  }

  return (
    <div className="date-picker-container">
      <div className="date-container-info">
        <i className="fas fa-arrow-left" onClick={decrementMonth} />
        <span className="current-month">{currentMonthDisplay}</span>
        <span className="current-year">{currentYearDisplay}</span>
        <i className="fas fa-arrow-right" onClick={incrementMonth} />
        <div className="date-grid-container">
          <div className="days">Mon</div>
          <div className="days">Tue</div>
          <div className="days">Wed</div>
          <div className="days">Thu</div>
          <div className="days">Fri</div>
          <div className="days">Sat</div>
          <div className="days">Sun</div>

          {arrayOfDates.map((date, index) => {
            const isDisabled = date === null;
            return (
              <div
                className={`dates ${isDisabled ? `disable-click` : `dates`}`}
                key={index}
                onClick={(e) => !isDisabled && selectDate(e)}
              >
                {date !== null ? date : ""}
              </div>
            );
          })}
        </div>
        <DateButtonValidation
          className="date-button"
          currentMonth={currentMonth}
          currentYear={currentYear}
          selectedDate={selectedDate}
        />
        <div className="selected-date">{selectedDateDisplay}</div>
      </div>
    </div>
  );
}
