import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import styles from '../styles/Nav.module.css';


function Nav() {

  return (

    <nav>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">Contact</Link>
        </li>
        <li>
          <Link className={styles.link} to="/cart"> <CartIcon /></Link>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;