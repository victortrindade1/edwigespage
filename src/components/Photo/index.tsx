import React from "react";

import styles from "./styles.module.css";
import Image from "next/image";

import photo from "@/assets/jpeg/photo.jpg";
import maskborder from "@/assets/svg/maskborder.svg";

const Photo: React.FC = () => {
  return (
    <div className={styles.photocontainer}>
      <Image src={photo} alt={"Dr. Ed"} className={styles.photo} />
      <Image
        src={maskborder}
        alt={"Mask border"}
        className={styles.maskborder}
      />
    </div>
  );
};

export default Photo;
