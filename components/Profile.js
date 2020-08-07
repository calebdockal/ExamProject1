import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomTabNavigator from './TabNavigator';

export default class Profile extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 25,
                color: '#6e6e6e',
                paddingTop: 15,
                marginLeft: 10,
              }}>
              MY ACCOUNT
            </Text>

            <TouchableOpacity
              style={{marginTop: 5}}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginTextStyle}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#f4f4f4',
              alignSelf: 'center',
              marginTop: 30,
              height: 110,
              padding: 25,
              borderRadius: 60,
              resizeMode: 'cover',
            }}>
            <Image
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                resizeMode: 'cover',
              }}
              source={require('../assets/edit-profile.png')}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text style={{fontWeight: '900', fontSize: 24}}>John Doe</Text>
            <Text>John.Doe@email.com</Text>
            <View style={{marginBottom: 40}}>
              <ScrollView>
                <TouchableOpacity style={styles.touchStyle}>
                  <Icon name="user" size={30} style={styles.iconStyle2} />
                  <Text style={styles.textStyle}>Edit Profile</Text>
                  <Icon
                    name="chevron-right"
                    size={20}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchStyle}>
                  <Icon name="star" size={30} style={styles.iconStyle2} />
                  <Text style={styles.textStyle}>My Subscription</Text>
                  <Icon
                    name="chevron-right"
                    size={20}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchStyle}>
                  <Icon name="bell" size={30} style={styles.iconStyle2} />
                  <Text style={styles.textStyle}>Push Notifications</Text>
                  <Icon
                    name="chevron-right"
                    size={20}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchStyle}>
                  <Icon name="comments" size={30} style={styles.iconStyle2} />
                  <Text style={styles.textStyle}>Floating Message</Text>
                  <Icon
                    name="chevron-right"
                    size={20}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchStyle}>
                  <Icon name="lock" size={30} style={styles.iconStyle2} />
                  <Text style={styles.textStyle}>Change Password</Text>
                  <Icon
                    name="chevron-right"
                    size={20}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  touchStyle: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
    marginRight: 20,
    height: 70,
    borderWidth: 0.1,
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 15,
    marginBottom: 10,
    elevation: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  textStyle: {
    flex: 1,

    marginLeft: 10,
  },
  iconStyle: {},
  iconStyle2: {
    color: 'yellow',
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderWidth: 1.5,
    borderColor: '#f4f4f4',
    borderStartColor: '#f3f3f3',
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  loginTextStyle: {
    fontWeight: '600',
    fontSize: 17,
    color: 'lightgray',
    marginRight: 20,
    marginTop: 5,
    paddingTop: 15,
  },
});
