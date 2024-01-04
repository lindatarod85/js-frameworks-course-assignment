import { Link } from 'react-router-dom';
import styles from '../styles/CheckoutSuccessPage.module.css';

function CheckoutSuccessPage() {
  return (
    <div className={styles.successContainer}>
      <h1>Thank you for your purchase!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">
        <button className={styles.button}>Back to homepage</button>
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
