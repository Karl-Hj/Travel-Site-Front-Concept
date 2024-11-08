export interface SwipeElements {
  id: string;
  src: string;
  alt: string;
  destination: string;
  days: number;
  price: number;
  description: string;
}

export interface ImagesArray {
  images: SwipeElements[];
}

export interface DateButton {
  currentMonth: number;
  currentYear: number;
  selectedDate: number;
  className: string;
}

export interface DatePickerProps {
  className: string;
  currentMonth: number;
  currentYear: number;
  selectedDate: number;
  setCurrentMonth: (update: (prevYear: number) => number) => void;
  setCurrentYear: (update: (prevYear: number) => number) => void;
  setSelectedDate: (date: number) => void;
}
