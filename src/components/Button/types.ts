export type ButtonProps = {
  label?: string,
  name?: string,
  createFnc: (e: React.FormEvent<HTMLFormElement>) => void;
  bgColor: string,
  edit?: any,
  disabled?: boolean,
  isLoading?: boolean,
  custom?: string,
}