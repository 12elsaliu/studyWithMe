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

      <TouchableOpacity onPress={this.signOut}>
        <View style={styles.container}>
          <Image source={signOutIcon} style={styles.signOutIcon} />
          <Text style={styles.text}>Sign Out</Text>
        </View>
      </TouchableOpacity>

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
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'

  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    position: 'relative',
    left: 10,
    top: 20

    // left: 70,
    // top: 10
  },

})