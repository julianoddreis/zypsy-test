import React from "react";
import classNames from "classnames";

import Styles from "./radio.module.css";

interface RadioProps {
  readonly id: string;
  readonly label: string;
  readonly selected: boolean;
  readonly onChange: () => void;
  readonly children?: never;
}

export function Radio({ id, label, selected, onChange }: RadioProps) {
  return (
    <div className={Styles.Component}>
      <div
        className={classNames(Styles.Radio, { [Styles.Selected]: selected })}
      />
      <input id={id} checked={selected} type="radio" onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
