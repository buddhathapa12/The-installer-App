import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.navbarCont}>
        <div className={styles.title}>
          <Image src="/home/logo.png" alt="logo" width={120} height={90} />
          <Link href="/">
            <a>The Installer</a>
          </Link>
        </div>

        <div className={styles.navbar}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/bookOnline">
            <a>Book Online</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
