import { ChangeEvent } from "react"

export type ButtonProps = {
  label?: string,
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
  imgName?: string,
  imgSrc?: string,
  value?: string,
  integer: number,
  units: string,
  createFnc: () => {},
  bgColor: string,
  edit: string,
  disabled: boolean,
  isLoading: boolean,
  custom: string,
}