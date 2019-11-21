import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Table = styled.View`
  background: #fff;
  flex: 1;
  margin: 20px auto;
  border-radius: 5px;
`;

export const ProductTable = styled.View`
  flex: 1;
`;

export const Product = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
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

  padding: 30px;
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
  margin: 0 15px 0 15px;
  height: 22%;
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

export const RemoveButton = styled.Text`
`;

export const Input = styled.View`
`;

export const CartProduct = styled.View``;


export const Footer = styled.View`
  flex: 1;
`;

export const FinishButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;

  max-height: 20%;
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
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const TotalText = styled.Text`
  font-size: 45px;
  font-weight: bold;
`;
