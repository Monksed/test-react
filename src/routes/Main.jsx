import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import './Main.scss';
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { cartCount, resetCart } = useCart();

  return (
    <div className="cart-icon" onClick={resetCart}>
      <FaShoppingCart className="cart-icon__icon"/>
      {cartCount > 0 && <span className="cart-icon__count">{cartCount}</span>}
    </div>
  );
};

const MainPage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: 'Rick Owens', price: 55000, image: '/images/rick.png', bonus: 550 },
      { id: 2, name: 'New Balance 2002R', price: 15000, image: '/images/2002r.png', bonus: 150 },
      { id: 3, name: 'Adidas Gazelle', price: 15000, image: '/images/gazelle.png', bonus: 150 },
      { id: 4, name: 'Air Jordan 4', price: 38000, image: '/images/aj4.png', bonus: 380 },
    ]);
  }, []);

  return (
    <div className="main">
      <CartIcon />
      <div className="main__container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.name}
            price={product.price}
            bonus={product.bonus}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};
export default MainPage;