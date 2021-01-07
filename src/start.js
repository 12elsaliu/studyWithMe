import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import image from './start.jpg';
import Time from './timer';

const styles = StyleSheet.create(
  {
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
    }
  }
);

export class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartButtonVisible: true
    };
    this.onStartButtonClick = this.onStartButtonClick.bind(this);
  }

  onStartButtonClick() {
    this.setState({
      isStartButtonVisible: false
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onStartButtonClick}>
          <Image
            source={image}
            style={styles.pauseButton}
          />
        </TouchableOpacity>

      </View>
    )
  }
}



