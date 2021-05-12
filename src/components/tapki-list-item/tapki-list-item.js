import './tapki-list-item.css'

const TapkiListItem = ({ tapki, onAddedToCart }) => {
  const { title, factory, price, coverImage } = tapki;
  return (
    <div className="tapki-list-item">
      <div className="tapki-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="tapki-details">        
        <span className="tapki-title"> {title} </span>
        <div className="tapki-factory"> {factory} </div>
        <div className="tapki-price"> {price} </div>
        <button 
        onClick={onAddedToCart}
        className="btn btn-info add-to-cart">Купить</button>
      </div>
      
    
    </div>
  )

}

export default TapkiListItem;