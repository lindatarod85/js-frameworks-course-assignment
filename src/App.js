import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { CartProvider } from './components/CartContext';
import CartPage from './components/CartPage';
import CheckoutSuccessPage from './components/CheckoutSuccessPage';
import ContactPage from './components/ContactPage';


function App() {


  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/CheckoutSuccessPage" element={<CheckoutSuccessPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
