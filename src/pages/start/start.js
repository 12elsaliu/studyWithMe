import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import image from '../../images/start.jpg';
import setting from '../../images/setting.png';

const styles = StyleSheet.create({
  pauseButton: {
    width: 160,
    height: 160,
  },

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 40,
    right: 10,
  },

  entryContainer: {
    height: 30,
    zIndex: 100,
  },
});

export class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartButtonVisible: true,
    };
  }

  render() {
    return (
      <>
        <View style={styles.entryContainer}>
          <TouchableOpacity onPress={this.props.goToSettingPage}>
            <Image source={setting} style={styles.settingButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.start}>
            <Image source={image} style={styles.pauseButton} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
