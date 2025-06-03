import React, { useState } from 'react';
import Layout from './components/layout';
import ListarProductos from './components/ListarProductos';
import Cart from './components/cart';
import './styles/styles.css';
import ApiProductos from './components/api';

const productos = [
  { id: 1, nombre: "Laptop", precio: 800 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 50 },
  { id: 4, nombre: "Monitor", precio: 300 },
  { id: 5, nombre: "Auriculares", precio: 75 }
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const alAgregarAlCarrito = (producto) => {
    setCarrito(carritoAnterior => [
      ...carritoAnterior,
      { ...producto, cantidad: 1 }
    ]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <Layout>
      <div className="app-container">
        <ListarProductos 
          productos={productos}
          alAgregarAlCarrito={alAgregarAlCarrito}
        />
        <Cart 
          items={carrito}
          onVaciarCarrito={vaciarCarrito}
        />
      </div>
    </Layout>
  );
  
}

export default App;

