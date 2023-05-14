import { ChangeEvent } from "react"

export type ImageUploaderProps = {
  label?: string,
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
  imgName?: string,
  imgSrc?: string,
  value?: string,
}