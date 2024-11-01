import Link from "next/link";
import styles from "../styles/pages/_skillspage.module.scss";
import Navbar from "../components/Navbar";

function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Skills Page</h1>
        <Link href="/">Return to HomePage</Link>
      </main>
    </>
  );
}

export default SkillsPage;
