import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

function ApiProductos() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch('https://api.ejemplo.com/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => setProductos(datos))
            .catch((error) => console.error('Error:', error));
    }, []);
    return (
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>{producto.nombre}</li>
            ))}</ul>
    );
}
export default ApiProductos;