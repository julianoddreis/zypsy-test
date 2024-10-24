"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/button";
import { Radio } from "@/components/radio";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button label="teste" type={"primary"}></Button>
      <Radio selected={true} onChange={() => {}}></Radio>
    </div>
  );
}
