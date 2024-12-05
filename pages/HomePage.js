import Navbar from "../components/Navbar";
import styles from "../styles/pages/_homepage.module.scss";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.text}>
            <section className={styles.title}>
              <h1 className={styles.highlight}>David Stevenoot</h1>
              <h3>Développeur Frontend</h3>
            </section>
            <section className={styles.presentation}>
              <p className={styles.section}>
                J'ai grandi à Dunkerque, dans le Nord. Mon parcours scolaire
                s'est terminé à la fac (licence STAPS). Suite à cela, j'ai vécu
                pendant quelques années de petits boulots (maître-nageur,
                ambulancier, ...).
              </p>
              <p className={styles.section}>
                Mais je voulais me retrouver dans un secteur qui me passionne
                alors en 2017 j'ai effectué une reconversion professionnelle
                dans une formation Web Designer chez M2I formation à Villeneuve
                d'Ascq.
              </p>
              <p className={styles.section}>
                {" "}
                Diplôme en poche, je suis devenu intégrateur Web chez{" "}
                <strong>KIMPLE</strong> à Roubaix. Suite à ça, j'ai travaillé en
                tant que développeur front-end chez <strong>REEZOCAR</strong> à
                Wasquehal.
              </p>
              <p className={styles.section}>
                {" "}
                Aujourd'hui, je continue à évoluer en tant que développeur
                front-end. Et je cherche également à me perfectionner sur les
                frameworks de javascript.
              </p>
            </section>
          </div>
          <section className={styles.imageContent}>
            <img src="../davidLarge.png" alt="david" className={styles.image} />
          </section>
        </div>
      </main>
    </>
  );
}

export default HomePage;
