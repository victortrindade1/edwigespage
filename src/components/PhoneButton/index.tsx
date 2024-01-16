import React from "react";
import Image from "next/image";

import dog from "../../assets/svg/dog.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

import styles from "./styles.module.css";

const PhoneButton: React.FC = () => {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneTitle}>Entre em Contato</div>
      <a
        href='https://wa.me/5522997827997?text=Olá%2C+Doutor+Ed%21'
        target={"_blank"}
      >
        <div className={styles.button} data-nosnippet>
          <Image src={whatsapp} alt={"Whatsapp"} className={styles.whatsapp} />
          <div
            className={styles.buttonText}
            data-nosnippet
          >{`(22) 99782-7997`}</div>
        </div>
      </a>
      <div className={styles.dogContainer}>
        <div className={styles.dog}>
          <Image
            src={dog}
            alt={"Dog"}
            className={styles.dogSvg}
            data-nosnippet
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneButton;
