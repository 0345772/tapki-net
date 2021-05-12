import { connect } from 'react-redux';
import {
  tapkiAddedToCart, 
  tapkiRemovedFromCart, 
  allTapkisRemovedFromCart} from '../../actions'
import './shopping-cart-table';

const ShoppingCartTable = ({ items, total, onInc, onDec, onDelete }) => {
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
      return (
        <tr key={id}>
          <td>{idx+1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>{total}</td>
          <td>
            <button
            onClick={() => onDelete(id)} 
            className="btn btn-outline-danger">
              <i className="fa fa-trash-o"/>
            </button>
            <button 
            onClick={() => onInc(id)}
            className="btn btn-outline-success">
              <i className="fa fa-plus-circle"/>
            </button>
            <button
            onClick={() => onDec(id)} 
            className="btn btn-outline-danger">
              <i className="fa fa-minus-circle"/>
            </button>
          </td>          
        </tr>
      )    
  }
  return (
    <div className="shopping-cart-table">
      <h2>Ваш заказ:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Название товара</th>
            <th>Колличество</th>
            <th>Сумма</th>
            <th>действия</th>
          </tr>
          
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>
      <div className="total">
        Всего: {total} grn
      </div>
    </div>
  )
}

const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal} }) => {
  return {
    items: cartItems,
    total: orderTotal
  } 
}

const mapDispatchToProps = {
    onInc: tapkiAddedToCart,
    onDec: tapkiRemovedFromCart,
    onDelete: allTapkisRemovedFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);