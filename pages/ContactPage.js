import Navbar from "../components/Navbar";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";
import styles from "../styles/pages/_contactpage.module.scss";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Contact</h1>
        <ContactForm />
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
      </main>
    </>
  );
}

export default ContactPage;
