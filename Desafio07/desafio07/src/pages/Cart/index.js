import React from 'react';
import * as CartActions from '../../store/modules/cart/actions';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import {
  Container,
  ProductTable,
  Footer,
  FinishButton,
  Total,
  TotalText,
  Table,
  FinishButtonText,
  Product,
  Image,
  ProductInfo,
  RemoveProduct,
  EmptyCart,
  EmptyText,
  UpdateAmount,
  TotalPrice,
  AddButton,
  RemoveButton,
  Input,
  CartProduct,
  Buttons } from './styles';
import { formatPrice } from '../../util/format';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({ cart, total, removeFromCart, updateAmountRequest  }) {
   function increment(product) {
     updateAmountRequest(product.id, product.amount + 1);
   }

   function decrement(product) {
     updateAmountRequest(product.id, product.amount - 1);
   }

   console.tron.log(cart.length);

  return (
    <Container>
      {cart.length > 0 ?
        <Table>

          <ProductTable>
            {cart.map(product => (
              <CartProduct>
                <Product>
                  <Image source={{ uri: product.image }} ></Image>
                    <ProductInfo>
                      <Text>{product.title}</Text>
                      <Text>{product.priceFormatted}</Text>
                    </ProductInfo>
                  <RemoveProduct onPress={() => removeFromCart(product.id)} >
                    <Icon name="delete-forever" size={24} color='#7159c1'/>
                  </RemoveProduct>
                </Product>

                <UpdateAmount>
                  <Buttons>
                    <RemoveButton>
                    <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </RemoveButton>
                    <Input readOnly ></Input>
                    <AddButton>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </AddButton>
                  </Buttons>
                  <TotalPrice>{total}</TotalPrice>
                </UpdateAmount>
              </CartProduct>
            ))}
          </ProductTable>

          <Footer>

            <Total>
              <Text>TOTAL</Text>
              <TotalText>{total}</TotalText>
            </Total>

            <FinishButton>
              <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
            </FinishButton>

          </Footer>

        </Table> :
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyCart>}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
