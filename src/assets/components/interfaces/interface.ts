export interface CloseDatePicker {
  setShowBooking: () => void;
}

export interface DestinationInfo {
  id: string;
  destination: string;
  src: string;
  alt: string;
  price: number;
  description: string;
}

export interface InfoArray {
  info: DestinationInfo[];
}

export interface MoreInformationProps {
  selectedDesti: DestinationInfo | null;
  bookButton: () => void;
  closeInfo: () => void;
}
