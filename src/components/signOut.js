import React from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';
import { View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import signOutIcon from '../images/signOut.png';





export class SignOut extends React.Component {
  state = {
    user: true
  }

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
      <View style={styles.container}>
        <TouchableOpacity onPress={this.signOut}>
          <Image source={signOutIcon} style={styles.signOutIcon} />
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  signOutIcon: {
    // position: 'absolute',
    width: 45,
    height: 50
  },

  container: {
    left: 40,
    top: 120,
    flexDirection: 'row',
    backgroundColor: 'blue',
    flexWrap: 'wrap',
    alignItems: 'flex-start'

  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    // left: 70,
    // top: 10
  },

})