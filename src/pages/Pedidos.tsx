import { useState } from 'react';
import pedidosData from '../../datas/pedidos.json';
import PedidoModal from '../components/PedidoModal';
import './Pedidos.css';

interface Pedido {
    id: number;
    fecha: string;
    monto: number;
    // Add other fields if present in pedidos.json
}

const Pedidos = () => {
  const [selectedPedido, setSelectedPedido] = useState<Pedido | null>(null);

const handleOpenModal = (pedido: Pedido) => {
    setSelectedPedido(pedido);
};

  const handleCloseModal = () => {
    setSelectedPedido(null);
  };

  return (
    <div className="pedidos-container">
      <h1>Historial de Pedidos</h1>
      <table className="pedidos-table">
        <thead>
          <tr>
            <th>Número de Orden</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {pedidosData.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.fecha}</td>
              <td>${pedido.monto.toFixed(2)}</td>
              <td>
                <button onClick={() => handleOpenModal(pedido)} className="view-btn">
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPedido && (
        <PedidoModal pedido={selectedPedido} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Pedidos;
