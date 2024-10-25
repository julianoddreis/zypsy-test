import React, { ReactNode } from "react";
import classNames from "classnames";

import { Spinner } from "@/components/spinner";

import Styles from "./button.module.css";

type ButtonType = "primary" | "secondary";

interface ButtonProps {
  readonly label: string;
  readonly icon: ReactNode;
  readonly type: ButtonType;
  readonly loading: boolean;
  readonly onClick: () => void;
}

export function Button({ label, icon, loading, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={classNames(Styles.Button, {
        [Styles.Primary]: type === "primary",
        [Styles.Secondary]: type === "secondary",
      })}
    >
      <span>{label}</span>
      {loading ? <Spinner size="small" type={type} /> : icon}
    </button>
  );
}
