import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CompanyProfileScreen from '../screens/CompanyProfileScreen';
import WorkerProfileScreen from '../screens/WorkerProfileScreen';


export const AppTabNavigator = createBottomTabNavigator({
  CompanyDetails : {
    screen:CompanyProfileScreen,
    navigationOptions :{
      tabBarLabel : "Companies",
    }
  },
  WorkerDetails: {
    screen: WorkerProfileScreen,
    navigationOptions :{
      tabBarLabel : "Workers",
    }
  }
});
