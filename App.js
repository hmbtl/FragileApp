import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
  Main,
  Discover,
  Login,
  Register,
  CitySelect
} from '@screens'
import {HeaderTitle} from '@components/Views'

import {scale} from 'react-native-size-matters';

import {images, colors, fonts} from '@config';

const MainStack = createStackNavigator({
  HomeScreen: {
    screen: Main
  },
  LoginScreen: {
    screen: Login,
    navigationOptions: () => ({
      headerBackTitle: null
    })
  },
  RegisterScreen: {
    screen: Register,
    navigationOptions: () => ({
      headerBackTitle: null
    })
  },
  DiscoverScreen:{
    screen: Discover
  }
},
{
  navigationOptions:{
    headerTintColor:colors.pink,
    headerBackImage: <Image source={images.backChevronPink} style={{marginLeft:scale(5), marginRight:5, marginTop:5, marginBottom:5}}/>,
    headerStyle:{
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS,
        borderBottomWidth: 0
      },
  }
});


export default RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    CitySelectModal: {
      screen: CitySelect,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);