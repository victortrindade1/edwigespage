import Header from "@/components/Header";
import Location from "@/components/Location";
import Slogan from "@/components/Slogan";
import Photo from "@/components/Photo";
import ServiceList from "@/components/ServiceList";
import PhoneButton from "@/components/PhoneButton";
import Footer from "@/components/Footer";

import FadeInSection from "@/components/FadeInSection";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.background}>
        <Photo />
        <FadeInSection>
          <Slogan />
        </FadeInSection>
        <FadeInSection>
          <ServiceList />
        </FadeInSection>
        <FadeInSection>
          <Location />
        </FadeInSection>
        <FadeInSection>
          <PhoneButton />
        </FadeInSection>
      </div>

      <Footer />
    </main>
  );
}
