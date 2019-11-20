import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Cart, CartItens, LogoHeader} from './styles';

export default function Header({ navigation }) {
  return (
      <Container>
        <LogoHeader />
        <Cart onPress={() =>  navigation.navigate('Cart') }>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <CartItens>3</CartItens>
        </Cart>
      </Container>
    );
  }
