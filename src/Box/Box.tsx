import React from "react";
import "./Box.css";

export type BoxProps = React.PropsWithChildren<{
  text: string;
  img: string;
}>;

export default function Box({ text, img }: BoxProps) {
  return (
    <div className="Box">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
