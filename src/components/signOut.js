import React from 'react';
import {GoogleSignin} from '@react-native-community/google-signin';
import ButtonOne from './ButtonOne';

export class SignOut extends React.Component {
  state = {
    user: true,
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } finally {
      this.props.isSignOut();
    }
  };

  render() {
    return <ButtonOne title="Sign Out" onPress={this.signOut} size="sm" />;
  }
}
