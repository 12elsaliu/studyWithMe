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
