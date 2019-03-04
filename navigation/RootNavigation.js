import React from 'react';
import {Platform, Vibration} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationService from './NavigationService';
import MainScreen from '../screens/MainScreen';
const RootStackNavigator = createAppContainer(createStackNavigator(
    {
        Main: MainScreen,
    },
    {
        mode: 'card',
        headerMode:'screen',
    }
));



class RootNavigator extends React.Component {

    render() {
      const prefix = Platform.OS === 'android' ? 'otopac://otopac/' : 'otopac://';
      return <RootStackNavigator
          ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          uriPrefix={prefix}/>;
  }
}


export default RootNavigator