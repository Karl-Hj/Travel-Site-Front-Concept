import "./css/booking.css";
import { DatePicker } from "./Datepicker";

export function Booking() {
  //   const date = new Date();
  //   console.log(date.getMonth());
  return (
    <div className="booking-container">
      <DatePicker />
    </div>
  );
}
