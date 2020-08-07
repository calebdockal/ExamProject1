import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import {Input, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      given_name: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      email: '',
      gender: '',
      confirmationCode: '',
      modalVisible: false,
      user: {},
    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
    console.log('key - ', key);
    console.log('value -', value);
  }
  handleSignUp = () => {
    const {
      email,
      password,
      confirmPassword,
      birthdate,
      gender,
      given_name,
    } = this.state;

    if (password === confirmPassword) {
      Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name,
          email,
          birthdate,
          gender,
        },
      })
        .then(() => this.setState({modalVisible: true}))
        .catch((err) => console.log(err));
    } else {
      alert('Passwords do not match.');
    }
  };
  // Allowing user to confirm email with code
  handleConfirmationCode = () => {
    const {email, confirmationCode} = this.state;
    Auth.confirmSignUp(email, confirmationCode, {})
      .then(() => {
        this.setState({modalVisible: false});
        this.props.navigation.navigate('Login');
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 40}}>
            Register
          </Text>
          <Text style={styles.titleStyle}>Full Name :</Text>
          <TextInput
            onChangeText={(value) => this.setState({given_name: value})}
            style={styles.input}
            placeholder="John Doe"
          />
          <Text style={styles.titleStyle}>Email :</Text>
          <TextInput
            onChangeText={(value) => this.setState({email: value})}
            style={styles.input}
            placeholder="John@email.com"
          />
          <Text style={styles.titleStyle}>Date of Birth :</Text>
          <Input
            rightIcon={{type: 'font-awesome', name: 'calendar'}}
            onChangeText={(value) => this.setState({birthdate: value})}
          />
          <Text style={styles.titleStyle}>Gender :</Text>
          <TextInput
            onChangeText={(value) => this.setState({gender: value})}
            style={styles.input}
            placeholder="Male, Female, etc."
          />
          <Text style={styles.titleStyle}>Password :</Text>
          <TextInput
            onChangeText={(value) => this.setState({password: value})}
            style={styles.input}
            secureTextEntry={true}
            placeholder="***************"
          />
          <Text style={styles.titleStyle}>Confirm Password :</Text>
          <TextInput
            onChangeText={(value) => this.setState({confirmPassword: value})}
            style={{
              height: 50,
              borderRadius: 20,
              backgroundColor: '#f0eded',
              margin: 10,
              opacity: 0.9,
              marginBottom: 75,
            }}
            secureTextEntry={true}
            placeholder="***************"
          />
          <TouchableOpacity
            onPress={this.handleSignUp}
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
              Register
            </Text>
          </TouchableOpacity>
          <Modal visible={this.state.modalVisible}>
            <View>
              <Input
                label="confirmation code"
                leftIcon={{type: 'font-awesome', name: 'lock'}}
                onChangeText={(value) =>
                  this.setState({confirmationCode: value})
                }
              />
              <Button title="Submit" onPress={this.handleConfirmationCode} />
            </View>
          </Modal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Text style={{marginTop: 2}}>Already have an account?</Text>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 20,
    backgroundColor: '#f0eded',
    margin: 10,
    opacity: 0.9,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
  titleStyle: {fontWeight: 'bold', fontSize: 19},
});
