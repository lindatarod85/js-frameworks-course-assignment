import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
