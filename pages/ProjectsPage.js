import { Codeline, Navbar } from "../components";
import ContactButton from "../components/ContactButton";
import styles from "../styles/pages/_projectspage.module.scss";

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Project Page</h2>
        <div className={styles.container}>
          <section className={styles.project}>
            <img
              className={styles.project_img}
              src="recipeshop.png"
              alt="recipeshop"
            />
            <div className={styles.project_text}>
              <p className={styles.project_title}>recipe shop</p>
              <p>
                Le projet recipe shop est un projet de fin d'études. Il s'agit
                d'une application permettant à des utilisateurs de générer une
                liste de courses. l'application propose des alternatives de
                parcours de courses pour que l'utilisateur ait le choix entre
                aller au moins cher, au plus proche, à la livraison, etc.
              </p>
              <p className={styles.project_tech}>
                Tech stack : <Codeline>React Native</Codeline>{" "}
                <Codeline>CSS</Codeline> <Codeline>javascript</Codeline>{" "}
                <Codeline>mongoDB</Codeline> <Codeline>Express JS</Codeline>
              </p>
              <p className={styles.project_date}>janvier 2024</p>
            </div>
          </section>
          <section className={styles.project}>
            <img
              className={styles.project_img}
              src="tickethack.png"
              alt="tickethack"
            />
            <div className={styles.project_text}>
              <p className={styles.project_title}>tickethack</p>
              <p>reservation de billet de train, exercice de formation</p>
              <p className={styles.project_tech}>
                Tech stack : <Codeline>HTML</Codeline> <Codeline>CSS</Codeline>{" "}
                <Codeline>javascript</Codeline> <Codeline>mongoDB</Codeline>{" "}
                <Codeline>Express JS</Codeline>
              </p>
              <p className={styles.project_date}>novembre 2023</p>
            </div>
          </section>
          <section className={styles.project}>
            <img
              className={styles.project_img}
              src="hackatweet.png"
              alt="hackatweet"
            />
            <div className={styles.project_text}>
              <p className={styles.project_title}>hackatweet</p>
              <p>exercice de formation, pseudo twitter</p>
              <p className={styles.project_tech}>
                Tech stack : <Codeline>HTML</Codeline> <Codeline>CSS</Codeline>{" "}
                <Codeline>javascript</Codeline> <Codeline>mongoDB</Codeline>{" "}
                <Codeline>Express JS</Codeline>
              </p>
              <p className={styles.project_date}>novembre 2023</p>
            </div>
          </section>
        </div>
        <ContactButton />
      </main>
    </>
  );
}

export default ProjectsPage;
