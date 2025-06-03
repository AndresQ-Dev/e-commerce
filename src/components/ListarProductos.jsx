import React from 'react';
import '../styles/styles.css';

const ListarProductos = ({ productos, alAgregarAlCarrito }) => {
  return (
    <div className="product-list">
      <h2>Productos Disponibles</h2>
      <div className="products-container">
        {productos.map(producto => (
          <div key={producto.id} className="product-item">
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => alAgregarAlCarrito(producto)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListarProductos;
