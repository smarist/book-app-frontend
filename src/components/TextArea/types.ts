import { ChangeEvent, ChangeEventHandler } from "react"

export type TextAreaProps = {
  label?: string,
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  name?: string,
  value?: string,
  type?: string,
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void,
}