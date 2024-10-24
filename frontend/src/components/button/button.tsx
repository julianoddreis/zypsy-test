import React, { ComponentType, ReactNode } from "react";
import classNames from "classnames";

import Styles from "./button.module.css";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  readonly label: string;
  readonly icon?: ComponentType<{ className: string }>;
  readonly type: ButtonType;
}

export function Button({ label, icon, type }: ButtonProps) {
  return (
    <button
      className={classNames(Styles.Button, {
        [Styles.Primary]: type === "primary",
        [Styles.Secondary]: type === "secondary",
      })}
    >
      {label}
      {icon && React.createElement(icon, { className: Styles.Icon })}
    </button>
  );
}
