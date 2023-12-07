import Header from "@/components/Header";
import Image from "next/image";

import photo from "@/assets/jpeg/photo.jpg";
import maskborder from "@/assets/svg/maskborder.svg";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.photocontainer}>
        <Image src={photo} alt={"Dr. Ed"} className={styles.photo} />
        <Image
          src={maskborder}
          alt={"Mask border"}
          className={styles.maskborder}
        />
      </div>
    </main>
  );
}
