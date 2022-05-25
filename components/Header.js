import Link from "next/link";

import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.burger}>
        <div className={styles.burgerline}></div>
        <div className={styles.burgerline}></div>
        <div className={styles.burgerline}></div>
      </div>
      <nav className={styles.togglemenu}>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
