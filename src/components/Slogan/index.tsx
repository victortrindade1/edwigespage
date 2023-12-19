import React from "react";

import styles from "./styles.module.css";

const Slogan: React.FC = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.div1}>O melhor</div>
      <div className={styles.div2}>cuidado com</div>
      <div className={styles.div3}>seu pet</div>
    </div>
  );
};

export default Slogan;
