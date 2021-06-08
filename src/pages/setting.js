import React from 'react';
import {SignOut} from './../components/signOut';
import {Start} from '../pages/start/start';
import exit from '../images/exit.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import entry from '../images/chartEntry.jpg';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={['#5B8899', '#91B2BE']}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export class Setting extends React.Component {
  state = {
    user: true,
  };

  render() {
    if (this.state.user) {
      return (
        <>
          <View style={{backgroundColor: 'grey'}}>
            <View>
              <TouchableOpacity onPress={this.props.backToStartPage}>
                <Image source={exit} style={styles.exitButton} />
              </TouchableOpacity>
            </View>

            <View>
              <AppButton title="History Review" size="sm" />
              <AppButton title="Sign Out" size="sm" />
            </View>
          </View>

          {/* <View style={styles.settingItems}>
            <View style={styles.entryContainer}>
              <TouchableOpacity onPress={this.props.goToChartPage}>
                <Text style={styles.text}>
                  <Image source={entry} style={styles.iconStyle} />
                  Chart
                </Text>
              </TouchableOpacity>
            </View>

            <SignOut isSignOut={this.props.isSignOut} />
          </View> */}
        </>
      );
    } else {
      return <Start />;
    }
  }
}

const styles = StyleSheet.create({
  exitButton: {
    width: 35,
    height: 35,
    // top: 35,
    // left: 10,
  },
  // entryContainer: {},
  // iconStyle: {
  //   width: 45,
  //   height: 50,
  // },

  // text: {
  //   fontSize: 17,
  //   fontWeight: 'bold',
  //   color: 'black',
  //   alignSelf: 'center',
  // },

  // settingItems: {
  //   top: '30%',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  // },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
