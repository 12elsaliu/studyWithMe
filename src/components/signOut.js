import React from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import signOutIcon from '../images/signOut.png';
import ButtonOne from './ButtonOne';

export class SignOut extends React.Component {
  state = {
    user: true,
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.isSignOut();
      // this.props.clickSignOut()//add into parents components
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      // <TouchableOpacity onPress={this.signOut}>
      //   <View style={styles.container}>
      //     <Text style={styles.text}>
      //       <Image source={signOutIcon} style={styles.signOutIcon} />
      //       Sign Out
      //     </Text>
      //   </View>
      // </TouchableOpacity>
      <ButtonOne title="Sign Out" onPress={this.signOut} size="sm" />
    );
  }
}

const styles = StyleSheet.create({
  signOutIcon: {
    width: 45,
    height: 50,
  },

  container: {},

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});
