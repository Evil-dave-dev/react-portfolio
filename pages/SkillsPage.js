import styles from "../styles/pages/_skillspage.module.scss";
import Navbar from "../components/Navbar";
import HtmlIcon from "../components/icons/HtmlIcon";
import CssIcon from "../components/icons/CssIcon";
import JavascriptIcon from "../components/icons/JavascriptIcon";
import ReactIcon from "../components/icons/ReactIcon";
import NodejsIcon from "../components/icons/NodejsIcon";
import ExpressIcon from "../components/icons/ExpressIcon";
import MongodbIcon from "../components/icons/MongodbIcon";

function SkillsPage() {
  const skills = {
    frontend: [
      {
        link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        label: "HTML",
        icon: <HtmlIcon size={40} />,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/CSS",
        label: "CSS",
        icon: <CssIcon size={40} />,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        label: "JavaScript",
        icon: <JavascriptIcon size={40} />,
      },
      { link: "/", label: "React", icon: <ReactIcon size={40} /> },
    ],
    backend: [
      {
        link: "https://nodejs.org/fr",
        label: "Node JS",
        icon: <NodejsIcon size={40} />,
      },
      {
        link: "https://expressjs.com/fr/",
        label: "Express JS",
        icon: <ExpressIcon size={40} />,
      },
      {
        link: "https://www.mongodb.com/fr-fr",
        label: "MongoDB",
        icon: <MongodbIcon size={40} />,
      },
    ],
  };

  const Skill = ({ link, label, icon }) => (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {icon}
        {label}
      </a>
    </li>
  );

  const SkillSection = ({ title, skills }) => (
    <section>
      <h3>{title}</h3>
      <ul className={styles.links}>
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
