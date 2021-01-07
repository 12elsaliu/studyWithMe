import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { Timer, FlipNumber } from 'react-native-flip-timer';

export class Time extends React.Component {
  state = {
    play: true
  }

  play = () => {
    this.setState(({ play }) => ({ play: !play }));
  }

  render() {
    const { play } = this.state;
    return (
      <View style={styles.container}>
        <Timer time={0} play={play} />
        <TouchableOpacity style={styles.button} onPress={this.play}>
          <Text style={styles.text}>{play ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#333333',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cccccc',
  },
});