import React from 'react';
import {SignOut} from './../components/signOut';
import {Start} from '../pages/start/start';
import exit from '../images/exit.png';
import ButtonOne from '../components/ButtonOne';
import Exit from '../components/Exit';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import entry from '../images/chartEntry.jpg';
var {height, width} = Dimensions.get('window');

export class Setting extends React.Component {
  state = {
    user: true,
  };

  render() {
    if (this.state.user) {
      return (
        <>
          <View>
            <View>
              <Exit onPress={this.props.backToStartPage} />
            </View>

            <View style={{marginTop: height * 0.25}}>
              <ButtonOne
                title="History Review"
                onPress={this.props.goToChartPage}
                size="sm"
              />
              <SignOut isSignOut={this.props.isSignOut} />
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
    // margin: height * 0.05,
    // top: 35,
    // left: 10,
  },
});
