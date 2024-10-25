import { useRef } from "react";

import Styles from "./spinner.module.css";
import classNames from "classnames";

const AnimationDuration = 1000;

type SpinnerType = "primary" | "secondary";

interface SpinnerProps {
  readonly type: SpinnerType;
}

export function Spinner({ type }: SpinnerProps) {
  const mountTime = useRef<number | null>(null);

  if (mountTime.current === null) {
    mountTime.current = Date.now();
  }

  return (
    <svg
      className={classNames(Styles.Spinner, {
        [Styles.Primary]: type === "primary",
        [Styles.Secondary]: type === "secondary",
      })}
      preserveAspectRatio="xMidYMid"
      style={{
        animationDelay: `${-(mountTime.current % AnimationDuration)}ms`,
      }}
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
