import React from "react";
import classNames from "classnames";

import Styles from "./radio.module.css";

interface RadioProps {
  readonly selected: boolean;
  readonly className?: string;
  readonly onChange: () => void;
  readonly children?: never;
}

export function Radio({ selected, className, onChange }: RadioProps) {
  return (
    <div
      className={classNames(Styles.Component, className, {
        [Styles.Selected]: selected,
      })}
    >
      <input checked={selected} type="radio" onChange={onChange} />
    </div>
  );
}
