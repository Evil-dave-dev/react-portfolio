import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/_projectspage.module.scss";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Projects Page</h1>
        <Link href="/">Return to HomePage</Link>
      </main>
    </>
  );
}

export default ProjectsPage;
