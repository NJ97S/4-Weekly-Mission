"use client";

import { ComponentPropsWithoutRef, forwardRef } from "react";

import classes from "./input.module.css";

interface Props extends ComponentPropsWithoutRef<"input"> {
  label: string;
  type: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, type, errorMessage, ...restProps },
  ref
) {
  return (
    <div className={classes["input_container"]}>
      <label className={classes.label}>{label}</label>
      <input ref={ref} type={type} className={classes.input} {...restProps} />
      {errorMessage && <span className={classes.error}>{errorMessage}</span>}
    </div>
  );
});

export default Input;
