import { FC } from 'react';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styles from "./Button.module.scss";
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  name,
  createFnc,
  bgColor,
  edit,
  disabled,
  isLoading,
  custom,
}) => {
  return (
    <button
      className={`${styles.addBtn} ${styles[bgColor]}`}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => createFnc(e as any)}
      disabled={disabled}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.addTxt}>
          {edit  ? "Update" : "Add"} {name}
        </div>
      )}
    </button>
  );
}

export default Button;
