import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Cart, CartItens, LogoHeader} from './styles';


function Header({ navigation, cartSize }) {
  return (
      <Container>
        <LogoHeader />
        <Cart onPress={() => navigation.navigate('Cart') }>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <CartItens>{cartSize || 0}</CartItens>
        </Cart>
      </Container>
    );
}

export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
