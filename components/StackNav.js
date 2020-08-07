import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
const StackNav = createStackNavigator();

const StackNavScreen = ({navigation}) => (
  <StackNav.Navigator headerMode={'none'} initialRouteName="Profile">
    <StackNav.Screen name="Profile" component={Profile} />
    <StackNav.Screen name="Register" component={SignUp} />
    <StackNav.Screen
      name="Login"
      component={SignIn}
      options={{title: 'Login'}}
    />
  </StackNav.Navigator>
);

export default StackNavScreen;
