import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  height: 10%;
  background: #141419;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;

  padding-top: 20px;
`;
export const Cart = styled.TouchableOpacity`
  display: flex;
`;

export const CartItens = styled.Text`
  display: flex;

  background: #7159c1;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  margin-top: -30px;
  margin-left: 15px;

  color: #eee;
  text-align: center;
`;

export const LogoHeader = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 200px;
  height: 25px;
`;
