import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/CartPage.module.css';

function CartPage() {
 const { cartItems, addToCart, clearCart } = useContext(CartContext);
 const navigate = useNavigate();

 const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

 return (
 <div className={styles.cartContainer}>
   <h1>Cart</h1>
   {cartItems.map((item, index) => (
     <div className={styles.cartItems} key={index}>
       <p>{item.title}</p>
       <p className={styles.price}>Price: {item.price}</p>
     </div>
   ))}
   <p>Total: <span className={styles.total}>{totalPrice}</span></p>
   <button className={styles.button} onClick={() => { navigate('/CheckoutSuccessPage'); clearCart(); }}>Checkout</button>
 </div>
 );
}

export default CartPage;
