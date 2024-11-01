import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/_contactpage.module.scss";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>ContactPage</h1>
        <Link href="/">Return to HomePage</Link>
      </main>
    </>
  );
}

export default ContactPage;
