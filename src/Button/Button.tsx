import clsx from "clsx";
import React from "react";
import "./ButtonLink.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  ...restProps
}: ButtonProps) {
  return (
    <button {...restProps} className={clsx("ButtonLink", className)}>
      {children}
    </button>
  );
}
