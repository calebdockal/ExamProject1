import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
