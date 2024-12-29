import { useEffect, useState } from "react";
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
        icon: <HtmlIcon className={styles.skill_icon} />,
        title: "HTML",
        type: <Codeline>design</Codeline>,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/CSS",
        icon: <CssIcon className={styles.skill_icon} />,
        title: "CSS",
        type: <Codeline>design</Codeline>,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        icon: <JavascriptIcon className={styles.skill_icon} />,
        title: "javascript",
        type: <Codeline>design</Codeline>,
      },
      {
        link: "https://fr.react.dev/",
        icon: <ReactIcon className={styles.skill_icon} />,
        title: "react",
        type: <Codeline>design</Codeline>,
      },
      {
        link: "https://nextjs.org/",
        icon: <ReactIcon className={styles.skill_icon} />,
        title: "next",
        type: <Codeline>design</Codeline>,
      },
    ],
    backend: [
      {
        link: "https://nodejs.org/fr",
        icon: <NodejsIcon className={styles.skill_icon} />,
        title: "NodeJS",
        type: <Codeline>backend</Codeline>,
      },
      {
        link: "https://expressjs.com/fr/",
        icon: <ExpressIcon size={80} className={styles.skill_icon} />,
        title: "Express JS",
        type: <Codeline>backend</Codeline>,
      },
      {
        link: "https://www.mongodb.com/fr-fr",
        icon: <MongodbIcon className={styles.skill_icon} />,
        title: "mongoDB",
        type: <Codeline>backend</Codeline>,
      },
    ],
  };

  const Skill = ({ icon, link, title, type }) => (
    <li>
      <a href={link} target="_blank" className={styles.skill}>
        <div className={styles.skill_iconContent}>{icon}</div>{" "}
        <span>{title}</span>
        {type}
      </a>
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
        <h2 className={styles.title}>Tech Stack</h2>
        <section className={styles.intro}>
          <p>The dev tools, apps, devices, and games I use and play.</p>
        </section>
        <div className={styles.container}>
          <SkillSection title="frontend" skills={skills.frontend} />
          <SkillSection title="apps" skills={skills.backend} />
        </div>
        <ContactButton />
      </main>
    </>
  );
};

export default SkillsPage;
