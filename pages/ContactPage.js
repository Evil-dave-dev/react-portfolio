import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import InstagramIcon from "../components/icons/InstagramIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import Link from "next/link";
import styles from "../styles/pages/_contactpage.module.scss";

function ContactPage() {
  const socialMedias = [
    {
      href: "https://www.linkedin.com/in/david-stevenoot-363b6411a/",
      icon: <LinkedinIcon size={20} />,
    },
    {
      href: "https://www.instagram.com/david_stevenoot/",
      icon: <InstagramIcon size={20} />,
    },
    {
      href: "https://github.com/Evil-dave-dev",
      icon: <GithubIcon size={20} />,
    },
  ];

  const SocialMedia = ({ href, icon }) => {
    return (
      <li>
        <Link href={href}>
          <a target="_blank" rel="noopener noreferrer" className={styles.icon}>
            {icon}
          </a>
        </Link>
      </li>
    );
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h2>Contact</h2>
        <div className={styles.container}>
          <div className={styles.container_form}>
            <strong>vous pouvez nous envoyer un message ici</strong>
            <ContactForm />
          </div>
          <ul className={styles.container_media}>
            {socialMedias.map((link, index) => {
              return <SocialMedia key={index} {...link} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default ContactPage;
