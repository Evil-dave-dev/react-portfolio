import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import Image from "next/image";
import davidlarge from "../src/assets/davidlarge.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/pages/_homepage.module.scss";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.title}>
          <h3>Hello je suis</h3>
          <h1 className={styles.highlight}>David Stevenoot</h1>
          <h3>et je suis développeur Frontend</h3>
        </div>
        <div className={styles.infos}>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <p>habite à: Lille</p>
          </div>
          <div className={styles.info}>
            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
            <p>age: 40 ans</p>
          </div>
        </div>
        <p className={styles.presentation}>
          J'ai grandi à Dunkerque, dans le Nord. Mon parcours scolaire s'est
          terminé à la fac (licence STAPS). Suite à cela, j'ai vécu pendant
          quelques années de petits boulots (maître-nageur, ambulancier, ...).
          Mais je voulais me retrouver dans un secteur qui me passionne alors en
          2017 j'ai effectué une reconversion professionnelle dans une formation
          Web Designer chez M2I formation à Villeneuve d'Ascq. Diplôme en poche,
          je suis devenu intégrateur Web chez <strong>KIMPLE</strong> à Roubaix.
          Suite à ça, j'ai travaillé en tant que développeur front-end chez{" "}
          <strong>REEZOCAR</strong> à Wasquehal. Aujourd'hui, je continue à
          évoluer en tant que développeur front-end. Et je cherche également à
          me perfectionner sur les frameworks de javascript.
        </p>
        <div className={styles.socialMedia}>
          <SocialMedia
            icon={faGithub}
            href="https://github.com/Evil-dave-dev"
            label="github"
          />
          <SocialMedia
            icon={faInstagram}
            href="https://www.instagram.com/david_stevenoot/"
            label="instagram"
          />
          <SocialMedia
            icon={faLinkedinIn}
            href="https://www.linkedin.com/in/david-stevenoot-363b6411a/"
            label="linkedin"
          />
        </div>
        <div className={styles.image}>
          <Image src={davidlarge} alt="david" priority />
        </div>
      </main>
    </>
  );
}

export default HomePage;
