import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { FlatList } from 'react-native';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import { connect } from 'react-redux';

import {
  Container,
  Shoe,
  Image,
  Price,
  ProductButton,
  Title,
  CartAdd,
  ProductAmount,
  AddProduct
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({products: data});
  }

  handleAddProduct = id => {
    const { addToCartRequest, navigation } = this.props;

    addToCartRequest(id);

    setTimeout(() => {
      navigation.navigate('Cart');
    }, (300));

  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
              <Shoe key={item.id}>
                <Image source={{ uri: item.image }} />
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>

                <AddProduct onPress={() => this.handleAddProduct(item.id)}>
                  <ProductButton>
                    <Icon name="add-shopping-cart" size={20} color="#FFF" />
                    <ProductAmount>
                      {amount[item.id] || 0}
                    </ProductAmount>
                  </ProductButton>
                  <CartAdd>ADICIONAR</CartAdd>
                </AddProduct>
              </Shoe>
            )}
          />
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
