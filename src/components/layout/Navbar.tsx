import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <h1 className={styles.logo}>
          Dicas da Sam
        </h1>

        <nav className={styles.menu}>
          <a href="#">Produtos</a>
          <a href="#">Viagens</a>
          <a href="#">Gastronomia</a>
          <a href="#">Lifestyle</a>
        </nav>

        <a
          href="https://instagram.com/samantaacristina"
          target="_blank"
          rel="noreferrer"
          className={styles.instagram}
        >
          Instagram
        </a>

      </div>
    </header>
  );
}