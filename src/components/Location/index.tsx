import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

import addressicon from "@/assets/svg/addressicon.svg";

import styles from "./styles.module.css";

const Location: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.addressContainer}>
          <Image src={addressicon} alt={"address"} className={styles.icon} />
          <div className={styles.addressText}>Atendimentos a domicílio</div>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.locationContainer}>
          <div className={styles.locationText}>
            Campos dos Goytacazes e Região
          </div>
          <FaLocationDot className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Location;
