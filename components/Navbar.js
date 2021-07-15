import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/navbarstyles.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav__parent}>
        <div className={styles.nav__body}>
          <div className={styles.nav__logo}>
            <h1>JNPStudio.</h1>
          </div>
          <div className={styles.nav__links}>
            <ul className={styles.nav__list}>
              <li>
                <Link href="/">
                  <a>Photography</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Cost request</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
