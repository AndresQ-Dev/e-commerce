import React from 'react';
import '../styles/styles.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Ejercicio Carrito de Compras</h1>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2025 | Curso React</p>
      </footer>
    </div>
  );
};

export default Layout;
