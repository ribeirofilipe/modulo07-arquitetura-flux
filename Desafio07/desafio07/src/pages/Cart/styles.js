import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Table = styled.View`
  flex: 1;
  width: 78%;
  margin: 20px auto;
  border-radius: 4px;
`;

export const ProductTable = styled.View`
  flex: 1;
`;

export const Product = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;

`;

export const Image = styled.Image`
  height: 100px;
  width: 100px;

  margin-right: 20px;
`;

export const ProductInfo = styled.View`
  padding: 10px;
  max-width: 50%;
`;

export const EmptyCart = styled.View`
  flex: 1;
  background: #fff;
  max-height: 20%;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 78%;
`;

export const EmptyText = styled.Text`
  font-size: 25px;
  font-weight: bold;

  padding: 5px;
  margin-top: 5px;
`;

export const RemoveProduct = styled.TouchableOpacity`

`;

export const UpdateAmount = styled.View`
  background: #eee;
  height: 20%;
  margin: 0 10px 0 10px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Buttons = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
`;

export const RemoveButton = styled.TouchableOpacity`
`;

export const List = styled.FlatList``;

export const Input = styled.Text`
  padding: 0 5px 0 5px;
  background: #fff;
  width: 13%;
  border-radius: 3px;
  margin: 0 5px 0 5px;
`;

export const CartProduct = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-bottom: 15px;
  background: #fff;
  border-radius: 4px;

  padding-bottom: 15px;
`;


export const Footer = styled.View`
  justify-content: center;

  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  max-height: 30%;
`;

export const FinishButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 30%;
  background: #7159c1;
  margin: 10px;
  border-radius: 6px;
`;

export const FinishButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Total = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TotalValue = styled.Text`
  font-size: 45px;
  font-weight: bold;
`;

export const TotalText = styled.Text`
  color: ${darken(0.3, '#eeee')};
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Title = styled.Text``;
