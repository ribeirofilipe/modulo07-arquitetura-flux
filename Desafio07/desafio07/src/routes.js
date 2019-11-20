import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Header from './Components/Header';
import Home from './pages/Home/index';
import Cart from './pages/Cart/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />
      }),
    },
  ),
);

export default Routes;
