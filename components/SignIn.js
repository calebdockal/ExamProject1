import React from 'react';
import {TextInput, StyleSheet, Text, View, Image} from 'react-native';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input} from 'react-native-elements';
import {Auth} from 'aws-amplify';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      user: {},
    };
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }
  handleSignIn = () => {
    const {email, password} = this.state;
    Auth.signIn(email, password)
      .then((user) => props.navigation.navigate('Profile'))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            padding: 1,
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <Image
          style={{
            flex: 1,
            height: '65%',
            width: '65%',
            resizeMode: 'contain',
            marginLeft: 70,
          }}
          source={require('../assets/LoginImage.png')}
        />
        <Text style={{fontWeight: 'bold', padding: 10}}>Your Email :</Text>
        <TextInput
          onChangeText={(value) => this.setState({email: value})}
          style={styles.input}
          placeholder="John@email.com"
        />
        <Text style={{fontWeight: 'bold', padding: 10}}>Password :</Text>
        <TextInput
          onChangeText={(value) => this.setState({password: value})}
          style={styles.input}
          secureTextEntry={true}
          placeholder="***********"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text>Remember me</Text>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.handleSignIn}
          style={{
            backgroundColor: '#2bcaff',
            borderRadius: 30,
            padding: 15,
            marginBottom: 20,
            elevation: 5,
            shadowColor: 'gray',
            shadowOffset: {height: 5, width: 5},
            shadowRadius: 5,
            shadowOpacity: 1,
          }}>
          <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            margin: 10,
          }}>
          <Icon name="google" color="red" size={24}></Icon>
          <Icon name="facebook" color="#3358de" size={24}></Icon>
          <Icon
            name="twitter"
            backgroundColor="lightblue"
            color="#35cefc"
            size={24}></Icon>
        </View>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', margin: 10}}>
          <Text style={{fontSize: 15}}>or </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              Register with your email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#f0eded',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
});
