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
  NextIcon,
  SlackIcon,
  ContactButton,
  ChromeIcon,
  DiscordIcon,
  VsCodeIcon,
  FigmaIcon,
  GithubIcon,
  VercelIcon,
  ReduxIcon,
  ReactHookFormIcon,
} from "../components";
import styles from "../styles/pages/_skillspage.module.scss";

const SkillsPage = () => {
  const skills = {
    dev: [
      {
        link: "https://www.figma.com/fr-fr/",
        icon: <FigmaIcon className={styles.skill_icon} />,
        title: "Figma",
        type: <Codeline>design</Codeline>,
      },
      {
        link: "https://github.com/",
        icon: <GithubIcon className={styles.skill_icon} />,
        title: "Github",
        type: <Codeline>version control</Codeline>,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        icon: <HtmlIcon className={styles.skill_icon} />,
        title: "HTML",
        type: <Codeline>markup language</Codeline>,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/CSS",
        icon: <CssIcon className={styles.skill_icon} />,
        title: "CSS",
        type: <Codeline>style sheet</Codeline>,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        icon: <JavascriptIcon className={styles.skill_icon} />,
        title: "Javascript",
        type: <Codeline>language</Codeline>,
      },
      {
        link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        icon: <VercelIcon className={styles.skill_icon} />,
        title: "Vercel",
        type: <Codeline>deploiement</Codeline>,
      },
      {
        link: "https://fr.react.dev/",
        icon: <ReactIcon className={styles.skill_icon} />,
        title: "React",
        type: <Codeline>web framework</Codeline>,
      },
      {
        link: "https://fr.react.dev/",
        icon: <ReduxIcon className={styles.skill_icon} />,
        title: "Redux",
        type: <Codeline>JS library</Codeline>,
      },
      {
        link: "https://react-hook-form.com/",
        icon: <ReactHookFormIcon className={styles.skill_icon} />,
        title: "React hook form",
        type: <Codeline>JS library</Codeline>,
      },
      {
        link: "https://nextjs.org/",
        icon: <NextIcon className={styles.skill_icon} />,
        title: "Next",
        type: <Codeline>web framework</Codeline>,
      },
      {
        link: "https://nodejs.org/fr",
        icon: <NodejsIcon className={styles.skill_icon} />,
        title: "NodeJS",
        type: <Codeline>backend</Codeline>,
      },
      {
        link: "https://expressjs.com/fr/",
        icon: <ExpressIcon className={styles.skill_icon} />,
        title: "ExpressJS",
        type: <Codeline>backend</Codeline>,
      },
      {
        link: "https://www.mongodb.com/fr-fr",
        icon: <MongodbIcon className={styles.skill_icon} />,
        title: "MongoDB",
        type: <Codeline>database</Codeline>,
      },
    ],
    apps: [
      {
        link: "https://slack.com/intl/fr-fr",
        icon: <SlackIcon className={styles.skill_icon} />,
        title: "Slack",
        type: <Codeline>Communication</Codeline>,
      },
      {
        link: "https://www.google.com/intl/fr/chrome/",
        icon: <ChromeIcon className={styles.skill_icon} />,
        title: "Chrome",
        type: <Codeline>Browser</Codeline>,
      },
      {
        link: "https://discord.com/",
        icon: <DiscordIcon className={styles.skill_icon} />,
        title: "Discord",
        type: <Codeline>Communication</Codeline>,
      },
      {
        link: "https://code.visualstudio.com/",
        icon: <VsCodeIcon className={styles.skill_icon} />,
        title: "VScode",
        type: <Codeline>Editeur</Codeline>,
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
          <SkillSection title="Dev and design" skills={skills.dev} />
          <SkillSection title="Apps" skills={skills.apps} />
        </div>
        <ContactButton />
      </main>
    </>
  );
};

export default SkillsPage;
