import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/_contactpage.module.scss";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>ContactPage</h1>
        <ContactForm />
        <Link href="/">Return to HomePage</Link>
      </main>
    </>
  );
}

export default ContactPage;
