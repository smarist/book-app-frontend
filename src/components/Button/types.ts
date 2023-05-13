import { ChangeEvent } from "react"

export type ButtonProps = {
  label?: string,
  // onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
  createFnc: () => {},
  bgColor: string,
  edit?: any,
  disabled?: boolean,
  isLoading?: boolean,
  custom?: string,
}