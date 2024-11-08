import { useState } from "react";
import "./css/booking.css";
import { DatePicker } from "./Datepicker";

export function Booking() {
  const INITALMONTH = new Date().getMonth();
  const INITALYEAR = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = useState<number>(INITALMONTH);
  const [currentYear, setCurrentYear] = useState<number>(INITALYEAR);
  const [selectedDate, setSelectedDate] = useState<number>(0);
  return (
    <div className="booking-container">
      <DatePicker
        className="awayPick"
        currentMonth={currentMonth}
        currentYear={currentYear}
        selectedDate={selectedDate}
        setCurrentMonth={setCurrentMonth}
        setCurrentYear={setCurrentYear}
        setSelectedDate={setSelectedDate}
      />
      <DatePicker
        className="returnPick"
        currentMonth={currentMonth}
        currentYear={currentYear}
        selectedDate={selectedDate}
        setCurrentMonth={setCurrentMonth}
        setCurrentYear={setCurrentYear}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}
