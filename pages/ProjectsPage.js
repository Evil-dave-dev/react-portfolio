import Navbar from "../components/Navbar";
import styles from "../styles/pages/_projectspage.module.scss";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.highlight}>Projects Page</h2>
        <div className={styles.container}>
          <section className={styles.project}>
            <p>recipe shop</p>
            <p>projet de fin d'étude</p>
          </section>
          <section className={styles.project}>
            <p>tickethack</p>
            <p>reservation de billet de train, exercice de formation</p>
          </section>
          <section className={styles.project}>
            <p>hackatweet</p>
            <p>exercice de formation, pseudo twitter</p>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProjectsPage;
