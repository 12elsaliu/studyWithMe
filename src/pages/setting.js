import React from 'react';
import {SignOut} from './../components/signOut';
import {Start} from '../pages/start/start';
import exit from '../images/exit.png';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import entry from '../images/chartEntry.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
Icon.loadFont();

export class Setting extends React.Component {
  state = {
    user: true,
  };

  render() {
    if (this.state.user) {
      return (
        <>
          <View>
            <TouchableOpacity onPress={this.props.backToStartPage}>
              <Image source={exit} style={styles.exitButton} />
            </TouchableOpacity>
          </View>

          <Button variant="primary" size="lg" title="test" block>
            Block level button
          </Button>

          <View style={styles.settingItems}>
            {myIcon}
            <View style={styles.entryContainer}>
              <TouchableOpacity onPress={this.props.goToChartPage}>
                <Text style={styles.text}>
                  <Image source={entry} style={styles.iconStyle} />
                  Chart
                </Text>
              </TouchableOpacity>
            </View>

            <SignOut isSignOut={this.props.isSignOut} />
          </View>
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
    top: 35,
    left: 10,
  },
  entryContainer: {},
  iconStyle: {
    width: 45,
    height: 50,
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },

  settingItems: {
    top: '30%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
