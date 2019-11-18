import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {Container, Cart, CartItens, LogoHeader} from './styles';

export default class Header extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    options: 3,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const {navigation} = this.props;
    const {options} = this.state;
    this.setState({options: options + 1});
  };

  render() {
    const {options} = this.state;
    return (
      <Container>
        <LogoHeader onPress={() => this.handleNavigate()} />
        <Cart>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <CartItens>{options}</CartItens>
        </Cart>
      </Container>
    );
  }
}
