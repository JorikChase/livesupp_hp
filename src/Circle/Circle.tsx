import React from "react";

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  spread: number,
  startAngle: number,
  endAngle: number
) {
  var innerStart = polarToCartesian(x, y, radius, endAngle);
  var innerEnd = polarToCartesian(x, y, radius, startAngle);
  var outerStart = polarToCartesian(x, y, radius + spread, endAngle);
  var outerEnd = polarToCartesian(x, y, radius + spread, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    outerStart.x,
    outerStart.y,
    "A",
    radius + spread,
    radius + spread,
    0,
    largeArcFlag,
    0,
    outerEnd.x,
    outerEnd.y,
    "L",
    innerEnd.x,
    innerEnd.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    1,
    innerStart.x,
    innerStart.y,
    "L",
    outerStart.x,
    outerStart.y,
    "Z"
  ].join(" ");

  return d;
}

export type CircleProps = {
  delay?: number;
  angle?: number;
  size?: React.CSSProperties["width"];
  color?: React.CSSProperties["color"];
  x?: number;
  y?: number;
  radius?: number;
  duration?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Circle({
  angle = 359,
  color = "#043c54",
  radius = 17.5,
  x = radius,
  y = radius,
  strokeWidth = 2
}: CircleProps) {
  return (
    <path
      d={describeArc(x, y, radius - strokeWidth, strokeWidth, 0, angle)}
      fill={color}
    />
  );
}
