import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/components/_navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/SkillsPage", label: "Skills" },
    { href: "/ProjectsPage", label: "Projects" },
  ];

  // const [darkMode, setDarkMode] = useState(() => {})

  return (
    <div className={styles.main}>
      <ul className={styles.content}>
        <li className={styles.logo_content}>
          <Link href="/">
            <img src="logo.png" alt="logo" className={styles.logo} />
          </Link>
        </li>
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={router.pathname === link.href ? styles.activeLink : null}
          >
            <Link href={link.href} legacyBehavior>
              <a className={styles.link}>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
