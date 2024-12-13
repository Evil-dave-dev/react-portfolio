import { useState } from "react";
import { Codeline, Navbar, Modal, Project } from "../components";
import ContactButton from "../components/ContactButton";
import styles from "../styles/pages/_projectspage.module.scss";

const ProjectsPage = () => {
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
      img_modal: "code.jpg",
      frontend: "https://github.com/Evil-dave-dev/recipe-shop-frontend",
      backend: "https://github.com/Evil-dave-dev/recipe-shop-backend",
    },
    {
      name: "tickethack",
      img: "tickethack.png",
      description:
        "Le projet tickethack est un exercice de formation mis en ligne sur github. Il s'agit d'un simulacre de site de réservation de billet de train.",
      stack: ["HTML", "CSS", "javascript", "mongoDB", "Express JS"],
      date: "novembre 2023",
      img_modal: "code.jpg",
      frontend: "https://github.com/Evil-dave-dev/tickethack-frontend",
      backend: "https://github.com/Evil-dave-dev/tickethack-backend",
    },
    {
      name: "hackatweet",
      img: "hackatweet.png",
      description:
        "Le projet hackatweet est un exercice de formation mis en ligne sur github. C'est un pseudo twitter (X pour les puristes) qui contient une page d'authentification et un système de like des messages postés.",
      stack: ["HTML", "CSS", "javascript", "mongoDB", "Express JS"],
      date: "novembre 2023",
      img_modal: "code.jpg",
      frontend: "https://github.com/Evil-dave-dev/hackatweet-frontend",
      backend: "https://github.com/Evil-dave-dev/hackatweet-backend",
    },
  ];

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
              onClick={() =>
                openModal(
                  <>
                    <p className={styles.modal_title}>{project.name}</p>
                    <img
                      className={styles.modal_img}
                      src={project.img}
                      alt={`${project.name}1`}
                    />
                    <img
                      className={styles.modal_img}
                      src={project.img_modal}
                      alt={`${project.name}2`}
                    />
                    <p className={styles.modal_description}>
                      {project.description}
                    </p>
                    <strong>
                      lien frontend{" "}
                      <i>
                        <a
                          className={styles.modal_link}
                          href={project.frontend}
                          target="_blank"
                        >
                          {project.frontend}
                        </a>
                      </i>
                    </strong>
                    <strong>
                      lien backend{" "}
                      <i>
                        <a
                          className={styles.modal_link}
                          href={project.backend}
                          target="_blank"
                        >
                          {project.backend}
                        </a>
                      </i>
                    </strong>
                  </>
                )
              }
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
};

export default ProjectsPage;
