import { Link } from 'react-router-dom'
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <h1 className="logo text-dark">Tapki.net</h1>
      </Link>
      
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"/>
          {numItems}: {total}
        </div>
      </Link>
     
    </header>
  )

}

export default ShopHeader;