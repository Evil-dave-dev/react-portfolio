import {
  Navbar,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  ReactIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  Codeline,
} from "../components";
import ContactButton from "../components/ContactButton";
import styles from "../styles/pages/_skillspage.module.scss";

const SkillsPage = () => {
  const skills = {
    frontend: [
      {
        link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        icon: <HtmlIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>HTML</Codeline> est le langage de balisage que j'ai appris
            en formation web designer
          </>
        ),
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/CSS",
        icon: <CssIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>CSS</Codeline> est le langage informatique qui décrit la
            présentation des documents HTML que j'ai découvert en meme temps que
            le <Codeline>HTML</Codeline>
          </>
        ),
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        icon: <JavascriptIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>Javascript</Codeline> est un langage de script léger,
            orienté objet, principalement connu comme le langage de script des
            pages web
          </>
        ),
      },
      {
        link: "/",
        icon: <ReactIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>React</Codeline> est une bibliothèque open source
            JavaScript pour créer des interfaces utilisateurs
          </>
        ),
      },
      {
        link: "/",
        icon: "",
        presentation: (
          <>
            <Codeline>Next</Codeline> est une bibliothèque open source
            JavaScript pour créer des interfaces utilisateurs
          </>
        ),
      },
    ],
    backend: [
      {
        link: "https://nodejs.org/fr",
        icon: <NodejsIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>NodeJS</Codeline> est une plateforme logicielle libre en
            JavaScript, orientée vers les applications réseau évènementielles
            hautement concurrentes qui doivent pouvoir monter en charge
          </>
        ),
      },
      {
        link: "https://expressjs.com/fr/",
        icon: <ExpressIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>Express JS</Codeline> est un framework pour construire des
            applications web basées sur Node.js
          </>
        ),
      },
      {
        link: "https://www.mongodb.com/fr-fr",
        icon: <MongodbIcon size={40} className={styles.skill_icon} />,
        presentation: (
          <>
            <Codeline>MongoDB</Codeline> est un système de gestion de base de
            données orienté documents
          </>
        ),
      },
    ],
  };

  const Skill = ({ icon, presentation }) => (
    <li className={styles.skill}>
      <span className={styles.skill_content}>
        {icon}
        <span>{presentation}</span>
      </span>
    </li>
  );

  const SkillSection = ({ title, skills }) => (
    <section>
      <h3 className={styles.skills_title}>{title}</h3>
      <ul className={styles.skills}>
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
        <h2 className={styles.title}>Skills Page</h2>
        <section className={styles.intro}>
          <p>
            Je suis un développeur web qui a pu travailler sur différentes
            technos full stack, mais je suis particulièrement axé sur le{" "}
            <strong>développement front end</strong>.
          </p>
          <p>
            Sur cette page, vous pourrez voir toute la stack technique que
            j'utilise pour mes développements.
          </p>
          <p>
            Même si je travaille sur les 2 versants du développement web, mon
            appétance va tout particulièrement vers le front end avec lequel
            j'ai le plus d'affinité.
          </p>
        </section>
        <div className={styles.container}>
          <SkillSection title="frontend" skills={skills.frontend} />
          <SkillSection title="backend" skills={skills.backend} />
        </div>
        <ContactButton />
      </main>
    </>
  );
};

export default SkillsPage;
