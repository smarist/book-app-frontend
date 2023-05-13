import { ChangeEvent } from "react"

export type NumberProps = {
  label?: string,
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
  imgName?: string,
  imgSrc?: string,
  value?: string,
  integer: number,
  units: string,
  onChange: () => {},
}