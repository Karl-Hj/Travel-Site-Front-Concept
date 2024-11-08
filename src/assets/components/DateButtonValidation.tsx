import { DateButton } from "./interfaces/interface";

export function DateButtonValidation({
  className,
  currentMonth,
  currentYear,
  selectedDate,
}: DateButton) {
  function validate() {
    const month = currentMonth;
    const year = currentYear;
    const day = selectedDate;
  }
  return (
    <button className={className} onClick={validate}>
      Done
    </button>
  );
}
