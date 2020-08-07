import React from 'react';
import {TextInput, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Auth} from 'aws-amplify';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      given_name: '',
      password: '',
      birthdate: '',
      email: '',
      gender: '',
    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
    console.log('key - ', key);
    console.log('value -', value);
  }
  signUp() {
    Auth.signUp({
      username: this.state.email,
      password: this.state.password,
      attributes: {
        given_name: this.state.given_name,
        email: this.state.email,
        birthdate: this.state.birthdate,
        gender: this.state.gender,
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 40}}>
            Register
          </Text>
          <Text style={styles.titleStyle}>Full Name :</Text>
          <TextInput
            onChangeText={(value) => this.onChangeText('given_name', value)}
            style={styles.input}
            placeholder="John Doe"
          />
          <Text style={styles.titleStyle}>Email :</Text>
          <TextInput
            onChangeText={(value) => this.onChangeText('email', value)}
            style={styles.input}
            placeholder="John@email.com"
          />
          <Text style={styles.titleStyle}>Date of Birth :</Text>
          <TouchableOpacity style={styles.input}>
            <TextInput
              onChangeText={(value) => this.onChangeText('DOB', value)}
              style={styles.input}
              placeholder=""
            />
            <Icon
              name="calendar"
              size={30}
              style={{
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: 9,
                color: '#1fc7ff',
              }}></Icon>
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Gender :</Text>
          <TextInput
            onChangeText={(value) => this.onChangeText('gender', value)}
            style={styles.input}
            placeholder="Male, Female, etc."
          />
          <Text style={styles.titleStyle}>Password :</Text>
          <TextInput
            onChangeText={(value) => this.onChangeText('password', value)}
            style={styles.input}
            secureTextEntry={true}
            placeholder="***************"
          />
          <Text style={styles.titleStyle}>Confirm Password :</Text>
          <TextInput
            onChangeText={(value) => this.onChangeText('password', value)}
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
            onPress={this.signUp.bind(this)}
            style={{
              backgroundColor: '#2bcaff',
              borderRadius: 30,
              padding: 15,
              marginBottom: 20,
            }}>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
              Register
            </Text>
          </TouchableOpacity>
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
  titleStyle: {fontWeight: '900', fontSize: 19},
});
