import styles from "../styles/pages/_skillspage.module.scss";
import Navbar from "../components/Navbar";

function SkillsPage() {
  const skills = {
    frontend: [
      { link: "https://developer.mozilla.org/fr/docs/Web/HTML", label: "HTML" },
      { link: "https://developer.mozilla.org/fr/docs/Web/CSS", label: "CSS" },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        label: "JavaScript",
      },
      { link: "/", label: "React" },
    ],
    backend: [
      { link: "https://nodejs.org/fr", label: "Node JS" },
      { link: "https://expressjs.com/fr/", label: "Express JS" },
      { link: "https://www.mongodb.com/fr-fr", label: "MongoDB" },
    ],
  };

  const Skill = ({ link, label }) => (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </li>
  );

  const SkillSection = ({ title, skills }) => (
    <section>
      <h3>{title}</h3>
      <ul>
        {skills.map((skills, index) => (
          <Skill key={index} {...skills} />
        ))}
      </ul>
    </section>
  );

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Skills Page</h1>
        <div className={styles.container}>
          <SkillSection title="frontend" skills={skills.frontend} />
          <SkillSection title="backend" skills={skills.backend} />
        </div>
      </main>
    </>
  );
}

export default SkillsPage;
