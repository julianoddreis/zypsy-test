import { Spinner } from "@/components/spinner";

import Styles from "./loader.module.css";

export function Loader() {
  return (
    <div className={Styles.Loader}>
      <Spinner size="big" type="secondary" />
    </div>
  );
}
