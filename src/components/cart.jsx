import React from 'react';
import '../styles/styles.css';

const Cart = ({ items, onVaciarCarrito }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul className="cart-items">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.nombre} - ${item.precio}</span>
                {item.cantidad && <span> (Cantidad: {item.cantidad})</span>}
              </li>
            ))}
          </ul>
          <button onClick={onVaciarCarrito} className="clear-cart">
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
