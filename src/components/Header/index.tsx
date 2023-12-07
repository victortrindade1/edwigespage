import React from "react";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <div>
      <Image src={logo} alt='Logomarca' width={100} height={24} />
    </div>
  );
};

export default Header;
