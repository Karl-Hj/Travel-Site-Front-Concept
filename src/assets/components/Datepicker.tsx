import { useEffect, useState } from "react";
import "./css/datePicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useToggle } from "./costumHooks/useToggle";
import { CloseDatePicker } from "./interfaces/interface";

export function DatePicker({ setShowBooking }: CloseDatePicker) {
  const INITALMONTH = new Date().getMonth();
  const INITALYEAR = new Date().getFullYear();
  const [currentMonthDisplay, setCurrentMonthDisplay] = useState<string>("");
  const [currentYearDisplay, setCurrentYearDisplay] = useState<number>();
  const [currentMonth, setCurrentMonth] = useState<number>(INITALMONTH);
  const [currentYear, setCurrentYear] = useState<number>(INITALYEAR);
  const [daysInMonth, setDaysInMonth] = useState<number>(0);
  const [firstDayIndex, setFirstDayIndex] = useState<number>(0);
  const [arrayOfDates, setArrayOfDates] = useState<(number | null)[]>([]);
  const monthFormater = new Intl.DateTimeFormat("en-US", { month: "long" });
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedDateDisplay, setSelectedDateDisplay] = useState<string>(""); // Shows selected  dd/mm/yyyy to user
  const [showButton, setShowButton] = useToggle(false);
  const [travelStartDate, setTravelStartDate] = useState<Date>();
  const [travelReturnDate, setTravelReturnDate] = useState<Date>();
  const [dateDivEventTarget, setDateDivEventTarget] = useState<HTMLElement>();
  const [showError, setShowError] = useState<boolean>(false);

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
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1); // Decrement year by 1
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1); // Decrement month by 1
    }
  }
  function incrementMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
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
    const divTarget = e.currentTarget as HTMLDivElement;

    if (divTarget.innerText === "") return;

    divTarget.classList.add("active-date");
    const activeDate = divTarget.innerText;
    const wholeDate = `${activeDate}/${currentMonth}/${currentYear}`;

    setSelectedDateDisplay(wholeDate);
    setSelectedDate(parseInt(activeDate));
    setDateDivEventTarget(divTarget);
  }

  /* Function and use effect to handle click event and validation on datepicker */

  //Retrives the depature date and displays instruction text
  function startDate() {
    if (!dateDivEventTarget) return; //Checks if user have clicked on a date

    setShowButton();

    dateDivEventTarget!.classList.add("departure-date");
    const instructionText = document.querySelector(
      ".date-picker-instruction"
    ) as HTMLDivElement;

    instructionText.innerText = "Select A Date For Return";

    setTravelStartDate(
      new Date(`${currentYear},${currentMonth + 1},${selectedDate} `)
    );
  }

  //Retrives the return date
  function returnDate() {
    setTravelReturnDate(
      new Date(`${currentYear},${currentMonth + 1},${selectedDate} `)
    );
  }

  //If return date is set validation runs
  useEffect(() => {
    if (travelReturnDate && travelStartDate) {
      validation();
      console.log("test");
    }
  }, [travelReturnDate, travelStartDate]);

  //Controlls that return date is not earlier than depature date
  function validation() {
    if (travelStartDate! > travelReturnDate!) {
      if (!showError) {
        setShowError(true);
      }
    } else {
      if (showError) {
        setShowError(false);
      }
    }
  }
  //Resets and bring user back to depature screen.
  function resetDates() {
    const removeDeparture = document.querySelectorAll(".dates");
    removeDeparture.forEach((date) => {
      date.classList.remove("departure-date");
    });
    const instructionText = document.querySelector(
      ".date-picker-instruction"
    ) as HTMLDivElement;
    instructionText.innerText = "Select A Date For Depature";
    setShowError(false);
    setShowButton();
  }

  return (
    <div className="date-pick-booking-container">
      <button className="close-date-picker" onClick={setShowBooking}>
        Close
      </button>
      <div className="date-picker-container">
        <div className="date-picker-instruction">
          Select A Date For Depature
        </div>
        {showError !== true ? (
          ""
        ) : (
          <div className="date-picker-error">
            Return Date can not be before start Date!
          </div>
        )}
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

          <div className="selected-date">{selectedDateDisplay}</div>
          {showButton !== true ? (
            <button className="date-button-start" onClick={startDate}>
              Confirm Departure Date
            </button>
          ) : (
            <>
              <button className="reset-button" onClick={resetDates}>
                Reset
              </button>
              <button className="date-button-return" onClick={returnDate}>
                Confirm Return Date
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
