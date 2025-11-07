import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
import { FaShoppingBasket } from "react-icons/fa";

const ProductCard = ({ imageSrc, price, title, bonus, onAddToCart }) => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoad(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoad) {
    return <div className="product-card loading">Загрузка...</div>;
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={title} />
        <span className="bonus-count">{bonus} ₽</span>
      </div>
      <div className="product-details">
        <h2>{title}</h2>
        <p>{price} ₽</p>
        <button className="btn-outline" onClick={onAddToCart}>
          В корзину <FaShoppingBasket className="basket-icon"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
