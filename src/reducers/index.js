import updateTapkiList from './tapki-list';
import updateShoppingCart from './shopping-cart';


const reducer = (state, action) => {
  return {
    tapkiList: updateTapkiList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
}
export default reducer;