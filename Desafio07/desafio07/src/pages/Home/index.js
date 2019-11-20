import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { FlatList } from 'react-native';
import { formatPrice } from '../../util/format';

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

export default class Home extends Component {
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

  handleAddProduct = async (item) => {
    console.tron.log("adicionado");
  }

  render() {
    const {products} = this.state;

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

                <AddProduct onpPress={() => this.handleAddProduct(item)}>
                  <ProductButton>
                    <Icon name="add-shopping-cart" size={20} color="#FFF">
                      <ProductAmount>
                        3
                      </ProductAmount>
                    </Icon>
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
