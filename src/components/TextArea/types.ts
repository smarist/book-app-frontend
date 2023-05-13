import { ChangeEvent } from "react"

export type TextFieldProps = {
  label?: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
  imgName?: string,
  imgSrc?: string,
  type?: string,
  value?: string,
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void,
}