import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import styles from '../styles/ProductPage.module.css';

function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  const { addToCart } = useContext(CartContext);


  if (isLoading) {
    return <div className={styles.loading}>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const discount = data.price - data.discountedPrice;
  const discountPercentage = (discount / data.price) * 100;

  return (
    <div className={styles.singleProdContainer}>
      <h1 className={styles.h1}>{data.title}</h1>
      <div>
        <img className={styles.img} src={data.imageUrl} alt={data.title} />
      </div>
      <div>
        <p>{data.description}</p>
        <p>Price: <span className={styles.price}>{data.discountedPrice}</span></p>
        {discount > 0 && <p className={styles.discount}>Discount: {discountPercentage.toFixed(2)}%</p>}
        <button className={styles.button} onClick={() => addToCart(data)}>Add to Cart</button>
        <h2>Reviews</h2>
        {data.reviews && data.reviews.length > 0 ? data.reviews.map((review, index) => (
          <p key={index}>{review.description}</p>
        )) : <p>There are no reviews on this product yet</p>}
      </div>
    </div>
  );
}

export default ProductPage;








