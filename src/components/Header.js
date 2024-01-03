import { Link } from 'react-router-dom';
import Nav from "./Nav";
import styles from '../styles/Header.module.css';

function Header() {
    return (
      <header className={styles.header}>
        <Link className={styles.link} to="/">
        <div className={styles.logo}>E-Com Store</div>
        </Link>
        <Nav />
      </header>
    );
  }

  export default Header;