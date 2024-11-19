import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import Link from "next/link";
import styles from "../styles/pages/_contactpage.module.scss";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Contact</h1>
        <ContactForm />
        <div className={styles.socialMedia}>
          <Link
            href="https://www.linkedin.com/in/david-stevenoot-363b6411a/"
            className={styles.icon}
          >
            <a target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={44} currentColor="white" />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/david_stevenoot/"
            className={styles.icon}
          >
            <a target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={44} currentColor="white" />
            </a>
          </Link>
          <Link href="https://github.com/Evil-dave-dev" className={styles.icon}>
            <a target="_blank" rel="noopener noreferrer">
              <GithubIcon size={44} currentColor="white" />
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ContactPage;
