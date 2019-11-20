import styled from 'styled-components';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Shoe = styled.View`
  background: #fff;
  max-width: 220px;
  height: 45%;
  padding: 10px;
  border-radius: 5px;
  margin-left: 20px;
`;

export const Image = styled.Image`
   height: 200px;
   width: 200px;
`;

export const Price = styled.Text``;

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
`;

export const AddProduct = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  margin-top: 10px;

  max-height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartAdd = styled.Text`
  color: #fff;
  margin-right: 45px;
  font-weight: bold;
`;

export const ProductButton = styled.View`
  background: ${darken(0.03, '#7159C1')};
  padding: 12px;
  justify-content: space-around;
`;

export const ProductAmount = styled.Text`
  font-size: 20px;
`;


