"use client";

import styles from "@/styles/loading.module.css";
import Sun from "./Sun";
import Icarus from "./Icarus";
import Daedalus from "./Deadalus";
import { useState } from "react";

export default function Loading() {
  const [touched, setTouched] = useState(false);
  const [change, setChange] = useState("");
  const [hidden, setHidden] = useState(false);

  function sunTouched() {
    setTouched(true);
    console.log("sun touched");
    setTimeout(() => {
      setChange("fade");
    }, 900);
    setTimeout(() => {
      setHidden(true);
    }, 1200);
  }
  return (
    <>
      {!hidden && (
        <div className={`${styles.loading} ${styles[change]}`}>
          <Daedalus touched={touched} />
          <Icarus touched={touched} />
          <Sun sunTouched={sunTouched} touched={touched} />
        </div>
      )}
    </>
  );
}
