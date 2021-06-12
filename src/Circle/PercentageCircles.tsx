import React from "react";
import Circle, { CircleProps } from "./Circle";
import Color from "color";
import clsx from "clsx";
import { useInView } from "react-hook-inview";

import "./PercentageCircles.css";

export type PercentageCirclesProps = {
  percentage: number;
  className?: string;
  circleOffset?: number;
  strokeWidth?: number;
} & Omit<CircleProps, "angle">;

export default function PercentageCircles({
  percentage,
  radius = 30,
  delay = 0,
  duration = 1000,
  color = "#043c54",
  className,
  circleOffset = 5,
  strokeWidth = 3,
  size = "auto",
  ...circleProps
}: PercentageCirclesProps) {
  const circleCount = Math.ceil(percentage / 100);
  const [ref, isVisible] = useInView({
    threshold: 1
  });

  return (
    <svg
      className={clsx("PercentageCircles", className)}
      ref={ref}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      width={radius}
      height={radius}
    >
      {isVisible &&
        Array(circleCount)
          .fill(null)
          .map((_, circleIndex) => {
            const currentPercentage =
              Math.min(
                percentage - (circleCount - circleIndex - 1) * 100,
                100
              ) / 100;

            const props: CircleProps = {
              ...circleProps,
              angle: currentPercentage * 359.9,
              x: radius,
              y: radius,
              strokeWidth,
              radius: radius - circleIndex * circleOffset,
              delay: delay + (circleCount - circleIndex - 1) * duration,
              color: Color(color)
                .lighten(0.3 * (circleCount - circleIndex - 1))
                .hex()
            };
            return <Circle {...props} key={`${circleIndex}`} />;
          })}
    </svg>
  );
}
