import React from "react";
import Image from "next/image";

import logo from "../../assets/svg/logo.svg";

import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.logocontainer}>
      <Image src={logo} alt='Logomarca' className={styles.logo} />
      <h1 className={styles.title}>O melhor cuidado com seu pet</h1>
    </header>
  );
};

export default Header;
