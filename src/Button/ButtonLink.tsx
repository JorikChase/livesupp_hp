import clsx from "clsx";
import React from "react";
import "./ButtonLink.css";

export type ButtonProps = React.PropsWithChildren<{
  type: string;
  href: string;
  className?: string;
}>;

export default function ButtonLink({
  children,
  type,
  href,
  className
}: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx("ButtonLink", `ButtonLink__${type}`, className)}
    >
      {children}
    </a>
  );
}
