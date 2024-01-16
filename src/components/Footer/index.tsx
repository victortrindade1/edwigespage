import Image from "next/image";
import React from "react";

import logo from "@/assets/svg/logowhite.svg";
import styles from "./styles.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerBody}>
        <div className={styles.logoContainer} data-nosnippet>
          <Image src={logo} alt={"Logo"} className={styles.logo} />
        </div>
        <div className={styles.descriptionContainer}>
          <h3>Dr. Ed - Médico Veterinário</h3>
          <p>
            Dr. Edwiges Siqueira
            <br />
            CRMV-RJ 9809
            <br />
          </p>
          <h3>Contato</h3>
          <p>Telefone / Whatsapp: (22) 99782-7997</p>
          <br />
          <h3>Campos dos Goytacazes e Região</h3>
        </div>
      </div>
      <div className={styles.website}>https://dredvet.vercel.app</div>
    </footer>
  );
};

export default Footer;
