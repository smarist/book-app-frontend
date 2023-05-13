import { ChangeEvent } from "react"

export type TextAreaProps = {
  label?: string,
  onChange?: () => void;
  name?: string,
  imgName?: string,
  imgSrc?: string,
  value?: string,
  type: string,
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void,
}