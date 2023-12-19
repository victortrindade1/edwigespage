import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdScience, MdVaccines } from "react-icons/md";
import { BsClipboardHeartFill } from "react-icons/bs";

import styles from "./styles.module.css";

const ServiceList: React.FC = () => {
  return (
    <div className={styles.serviceList}>
      {/* Consultas */}
      <div className={`${styles.itemConsultas}`}>
        <div className={`${styles.itemContainer}`}>
          <FaUserDoctor className={styles.serviceIcon} />
        </div>
        <div className={styles.itemLabel}>Consultas</div>
      </div>
      {/* Exames Laboratoriais */}
      <div className={`${styles.itemExames}`}>
        <div className={`${styles.itemContainer}`}>
          <MdScience className={styles.serviceIcon} />
        </div>
        <div className={styles.itemLabel}>Exames Laboratoriais</div>
      </div>
      {/* Vacinas */}
      <div className={`${styles.itemVacinas}`}>
        <div className={`${styles.itemContainer}`}>
          <MdVaccines className={styles.serviceIcon} />
        </div>
        <div className={styles.itemLabel}>Vacinas</div>
      </div>
      {/* Cirurgias */}
      <div className={`${styles.itemCirurgias}`}>
        <div className={`${styles.itemContainer}`}>
          <BsClipboardHeartFill className={styles.serviceIcon} />
        </div>
        <div className={styles.itemLabel}>Cirurgias</div>
      </div>
    </div>
  );
};

export default ServiceList;
