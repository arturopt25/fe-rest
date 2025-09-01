import React from 'react';
import './PedidoModal.css';

interface Item {
  nombre: string;
  cantidad: number;
  precio: number;
}

interface Pedido {
  id: string;
  fecha: string;
  monto: number;
  estado: string;
  items: Item[];
}

interface PedidoModalProps {
  pedido: Pedido;
  onClose: () => void;
}

const PedidoModal: React.FC<PedidoModalProps> = ({ pedido, onClose }) => {
  if (!pedido) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Detalles del Pedido: {pedido.id}</h2>
        <div className="modal-details">
          <p><strong>Fecha:</strong> {pedido.fecha}</p>
          <p><strong>Estado:</strong> {pedido.estado}</p>
          <p><strong>Monto Total:</strong> ${pedido.monto.toFixed(2)}</p>
        </div>
        <h3>Items del Pedido</h3>
        <ul className="modal-items-list">
          {pedido.items.map((item, index) => (
            <li key={index}>
              <span>{item.cantidad} x {item.nombre}</span>
              <span>${(item.cantidad * item.precio).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PedidoModal;
