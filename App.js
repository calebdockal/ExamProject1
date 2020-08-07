import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavScreen from './components/StackNav';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default class App extends React.Component {
  state = {isAuthenticated: false};
  authenticate = (isAuthenticated) => {
    this.setState({isAuthenticated});
  };
  render() {
    // if (this.state.isAuthenticated)
    return (
      <NavigationContainer>
        <StackNavScreen screenProps={{authenticate: this.authenticate}} />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({});
