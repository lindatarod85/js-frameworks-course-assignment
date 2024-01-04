import { useState } from "react";
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import ProductCard from './ProductCard';
import styles from '../styles/Home.module.css';

function Home() {
  const { data, isLoading, isError } = useApi(
    ' https://api.noroff.dev/api/v1/online-shop',
  );

  const [searchInput, setSearchInput] = useState('');

  if (isLoading) {
    return <div className={styles.loading}>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={styles.productContainer}>
      <h1>Products</h1>
      <input className={styles.input}
        type="text"
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
        placeholder="Search products"
      />
      {filteredProducts.length === 0 ? (
        <div>Sorry, no product found</div>
      ) : (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product}>
            <Link to={`/product/${product.id}`}>View product</Link>
          </ProductCard>
        ))
      )}
    </div>
  );
}

export default Home;