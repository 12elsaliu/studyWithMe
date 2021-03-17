import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import logo from '../../images/logo.jpg';

GoogleSignin.configure();

export class SignIn extends React.Component {
  state = {
    userInfo: null,
    isSigninInProgress: false,
  }

  signIn = async (silent) => {
    console.log('----->', silent)
    try {
      // await GoogleSignin.hasPlayServices();
      const userInfo = silent
        ? await GoogleSignin.signInSilently()
        : await GoogleSignin.signIn();
      this.setState({ userInfo });
      this.props.handleSignin(userInfo)//pass value to the parent
    } catch (error) {
      console.log({ silent, error });
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {

      }
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        this.setState({ isSigninInProgress: true })
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  componentDidMount = async () => {
    await this.signIn(true)
  };


  render() {
    return (
      <>

        <Text style={{ fontSize: 20, color: 'black', top: '55%', left: '29%' }}>Let's get started !</Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48, top: '60%', left: '25%' }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this.signIn(false)}
          disabled={this.state.isSigninInProgress} />
      </>
    )

  }

}

const styles = StyleSheet.create({
  logo: {
    width: 10,
    height: 10,
    top: 200,
    left: '25%',
    backgroundColor: 'blue'
  }
})