import React from 'react';
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
            }}>
            <Image
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                resizeMode: 'center',
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
    borderWidth: 0.2,
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'white',
    borderWidth: 0.5,
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
    //marginRight: 30,
    marginLeft: 10,
    //fontWeight: 'bold',
  },
  iconStyle: {
    //alignSelf: 'flex-end',
    //marginLeft: 20,
  },
  iconStyle2: {
    color: 'yellow',
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 0.1,
    borderTopColor: '#f4f4f4',
    borderStartColor: '#f3f3f3',
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
  },
  loginTextStyle: {
    fontWeight: '600',
    fontSize: 20,
    color: 'lightgray',
    marginRight: 20,
    paddingTop: 15,
  },
});
