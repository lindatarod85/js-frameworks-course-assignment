import { Link } from 'react-router-dom';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link className={styles.button} to={`/product/${product.id}`}>View product</Link>
    </div>
  );
}

export default ProductCard;

