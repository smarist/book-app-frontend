import { ChangeEvent } from "react"

export type NumberProps = {
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  imgName?: string;
  imgSrc?: string;
  value?: string | number | null;
  defaultValue?: string | number | readonly string[] | undefined;
  integer?: number;
  units?: string;
};
