import React, { FC } from "react";
import styles from "./TextArea.module.scss";
import { TextAreaProps } from "./types";

const TextArea: FC<TextAreaProps> = ({value, name, onChange, label}) => {
  return (
    <div className={styles["form-group"]}>
      <div className={styles["form-container"]}>
        <textarea
          name={name}
          value={value}
          placeholder={`Enter ${label?.toLowerCase()} here`}
          onChange={onChange}
        ></textarea>
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
};

export default TextArea;
