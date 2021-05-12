import React, {Component} from 'react';
import TapkiListItem from '../tapki-list-item';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withTapkistoreService } from '../hoc';
import { fetchTapkis, tapkiAddedToCart} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import './tapki-list.css';

const TapkiList = ({tapkis, onAddedToCart}) => {
  return(
    <ul className="tapki-list">
      {
        tapkis.map((tapki) => {
          return(
            <li key={tapki.id}>
              <TapkiListItem 
              tapki={tapki}
              onAddedToCart={() => onAddedToCart(tapki.id)}/>
            </li>
          )
        })
      }
    </ul>
  )
}

 class TapkiListContainer extends Component {
    componentDidMount() {
      this.props.fetchTapkis()
    }
  render() {
    const { tapkis, loading, error, onAddedToCart } = this.props;
    if(loading) {
      return <Spinner/>
    }
    if(error) {
      return <ErrorIndicator/>
    }
    return <TapkiList tapkis={tapkis} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ({tapkiList:{tapkis, loading, error}}) => {
  return  {tapkis, loading, error}   
};

const mapDispatchToProps = (dispatch, {tapkistoreService}) => {
  return {
    fetchTapkis: fetchTapkis(tapkistoreService, dispatch),
    onAddedToCart: (id) => dispatch(tapkiAddedToCart(id))
  }
}

export default compose(
  withTapkistoreService(),
  connect(mapStateToProps, mapDispatchToProps))(TapkiListContainer);


