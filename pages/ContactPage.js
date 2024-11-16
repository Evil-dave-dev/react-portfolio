import Navbar from "../components/Navbar";
import styles from "../styles/pages/_contactpage.module.scss";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Contact</h1>
        <ContactForm />
      </main>
    </>
  );
}

export default ContactPage;
