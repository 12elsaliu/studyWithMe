import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import logo from '../../images/logo.png';

GoogleSignin.configure();

export class SignIn extends React.Component {
  state = {
    userInfo: null,
    isSigninInProgress: false,
  };

  signIn = async (silent) => {
    console.log('----->', silent);
    try {
      // await GoogleSignin.hasPlayServices();
      const userInfo = silent
        ? await GoogleSignin.signInSilently()
        : await GoogleSignin.signIn();
      this.setState({userInfo});
      this.props.handleSignin(userInfo); //pass value to the parent
    } catch (error) {
      console.log({silent, error});
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      }
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        this.setState({isSigninInProgress: true});
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  componentDidMount = async () => {
    await this.signIn(true);
  };

  render() {
    return (
      <>
        {/* //   <Image
      //     source={require('../../images/back1.jpg')}
      //     style={styles.backgroundImage}
      //   /> */}
        <Image source={logo} style={styles.logo} />
        <View style={styles.container}>
          <Text style={styles.start}>
            Sign in with Google Account and let's get started.
          </Text>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => this.signIn(false)}
            disabled={this.state.isSigninInProgress}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    top: '20%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  logo: {
    width: 400,
    height: 400,
    top: '20%',
  },
  start: {
    fontSize: 12,
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});
