import Link from 'next/link';

function Header() {
  return (
    <div>
      <h1>The Installer1</h1>
      <div>
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
  );
}

export default Header;
