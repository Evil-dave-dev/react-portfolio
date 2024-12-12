import { useState } from "react";
import { Codeline, Navbar, Modal } from "../components";
import ContactButton from "../components/ContactButton";
import styles from "../styles/pages/_projectspage.module.scss";

function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const projects = [
    {
      name: "recipe shop",
      img: "recipeshop.png",
      description:
        "Le projet recipe shop est un projet de fin d'études mis en ligne sur github. Il s'agit d'une application permettant à des utilisateurs de générer une liste de courses. l'application propose des alternatives de parcours de courses pour que l'utilisateur ait le choix entre aller au moins cher, au plus proche, à la livraison, etc.",
      stack: ["React Native", "CSS", "javascript", "mongoDB", "Express JS"],
      date: "janvier 2024",
    },
    {
      name: "tickethack",
      img: "tickethack.png",
      description:
        "Le projet tickethack est un exercice de formation mis en ligne sur github. Il s'agit d'un simulacre de sit de réservation de billet de train.",
      stack: ["HTML", "CSS", "javascript", "mongoDB", "Express JS"],
      date: "novembre 2023",
    },
    {
      name: "hackatweet",
      img: "hackatweet.png",
      description:
        "Le projet hackatweet est un exercice de formation mis en ligne sur github. C'est un pseudo twitter(X pour les puristes) qui contient une page d'authentification et un système de like des messages postés.",
      stack: ["HTML", "CSS", "javascript", "mongoDB", "Express JS"],
      date: "novembre 2023",
    },
  ];

  const Project = ({ name, img, description, stack, date }) => (
    <article
      className={styles.project}
      role="button"
      onClick={() =>
        openModal(
          <>
            <p>{name}</p>
            <img className={styles.modal_img} src={img} alt={name} />
            <p>{description}</p>
          </>
        )
      }
    >
      <img className={styles.project_img} src={img} alt={name} />
      <div className={styles.project_text}>
        <p className={styles.project_title}>{name}</p>
        <p>{description}</p>
        <p className={styles.project_tech}>
          Tech stack :{" "}
          {stack.map((tech, index) => (
            <Codeline key={index}>{tech}</Codeline>
          ))}
        </p>
        <p className={styles.project_date}>{date}</p>
      </div>
    </article>
  );

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2 className={styles.title}>Project Page</h2>
        <div className={styles.container}>
          {projects.map((project, index) => (
            <Project
              key={index}
              {...project}
              onClick={() => openModal(project)}
              // name={project.name}
              // img={project.img}
              // description={project.description}
              // stack={project.stack}
              // date={project.date}
            />
          ))}
        </div>
        <ContactButton />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
        />
      </main>
    </>
  );
}

export default ProjectsPage;
