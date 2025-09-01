import menuData from '../../datas/menu.json';
import './Menu.css';
import fotico from '../assets/fotico.jpg';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Nuestro Menú</h1>
      {Object.entries(menuData).map(([categoria, items]) => (
        <div key={categoria} className="menu-category">
          <h2>{categoria}</h2>
          <div className="menu-grid">
            {(items as any[]).map((item: any) => (
              <div key={item.id} className="menu-card">
                <img src={item.image || fotico} alt={item.name} className="menu-card-img" />
                <div className="menu-card-body">
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-description">{item.description || ''}</p>
                  <p className="menu-card-price">${item.price.toFixed(2)}</p>
                  <button className="add-to-cart-btn">Añadir al Carrito</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Menu;
