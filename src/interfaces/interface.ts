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

export interface VideoProps {
  video: string;
  section: string;
  name: string;
}

export interface ArrayDisplay {
  infoArray: DestinationInfo[];
  moreInformation: (element: DestinationInfo) => void;
}
