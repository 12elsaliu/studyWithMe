import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import React from 'react';

GoogleSignin.configure();

export class SignIn extends React.Component {
  state = {
    userInfo: null,
    isSigninInProgress: false,
  }

  signIn = async (silent) => {
    try {
      // await GoogleSignin.hasPlayServices();
      const userInfo = silent
        ? await GoogleSignin.signInSilently()
        : await GoogleSignin.signIn();
      this.setState({ userInfo });
      this.props.handleSignin(userInfo)//pass value to the parent
    } catch (error) {
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
      <GoogleSigninButton
        style={{ width: 192, height: 48, top: '60%', left: '25%' }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.signIn}
        disabled={this.state.isSigninInProgress} />
    )

  }

}