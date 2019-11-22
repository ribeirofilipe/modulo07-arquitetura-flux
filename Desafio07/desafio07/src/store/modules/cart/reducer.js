import produce from 'immer';
import { ToastAndroid } from 'react-native';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(x => x.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
          ToastAndroid.show('Item removido do carrinho.', ToastAndroid.SHORT);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(x => x.id === action.id);

        draft[productIndex].amount = action.amount;
      });
    }
    default:
      return state;
  }
}
