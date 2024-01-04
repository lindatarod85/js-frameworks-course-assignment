/*import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContext';
import { useContext } from 'react';



function CartIcon() {
  const { cartItems } = useContext(CartContext);
 
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{cartItems.length}</span>
    </div>
  );
 }

export default CartIcon;
*/

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function CartIcon() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} onClick={() => navigate('/cart')} />
      <span>{cartItems.length}</span>
    </div>
  );
}

export default CartIcon;









