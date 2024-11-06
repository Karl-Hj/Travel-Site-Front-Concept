import { useState } from "react";

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);
  function toggle() {
    setValue((currentValue) => !currentValue);
  }
  return [value, toggle];
}
