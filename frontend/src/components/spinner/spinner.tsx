import classNames from "classnames";
import Styles from "./spinner.module.css";

type SpinnerType = "primary" | "secondary";

interface SpinnerProps {
  readonly type: SpinnerType;
  readonly size: "small" | "big";
}

export function Spinner({ type, size }: SpinnerProps) {
  return (
    <svg
      className={classNames(Styles.Spinner, {
        [Styles.Primary]: type === "primary",
        [Styles.Secondary]: type === "secondary",
        [Styles.Small]: size === "small",
        [Styles.Big]: size === "big",
      })}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        strokeWidth="10"
      />
    </svg>
  );
}
