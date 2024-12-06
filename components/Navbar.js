import Link from "next/link";
import styles from "../styles/components/_navbar.module.scss";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/SkillsPage", label: "Skills" },
    { href: "/ProjectsPage", label: "Projects" },
    // { href: "/ContactPage", label: "Contact" },
  ];

  return (
    <div className={styles.main}>
      <ul className={styles.content}>
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={router.pathname === link.href ? styles.activeLink : null}
          >
            <Link href={link.href}>
              <a className={styles.link}>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
