import classNames from "classnames";
import Styles from "./star.module.css";
import { useCallback } from "react";

type StarType = "primary" | "secondary";

interface StarProps {
  readonly type: StarType;
  readonly favorite: boolean;
  readonly onClick: () => void;
}

export function Star({ type, favorite, onClick }: StarProps) {
  const handleClick = useCallback(
    (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      event.stopPropagation();
      onClick();
    },
    [onClick]
  );

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={classNames(Styles.Component, {
        [Styles.Primary]: type === "primary",
        [Styles.Secondary]: type === "secondary",
        [Styles.Favorite]: favorite,
      })}
      onClick={handleClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99998 2.41333L12.4458 7.4075L17.9166 8.21333L13.9583 12.0983L14.8925 17.5867L9.99998 14.9942L5.10748 17.5867L6.04165 12.0983L2.08331 8.21333L7.55331 7.4075L9.99998 2.41333Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
