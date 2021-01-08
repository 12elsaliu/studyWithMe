import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { Timer, FlipNumber } from 'react-native-flip-timer';
import { TodaySummary } from '../../components/todaySummary';

export class Time extends React.Component {
  handleStopButtonPress = () => {
    this.props.onStop();
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Timer time={0} play={true} />
          <TouchableOpacity style={styles.button} onPress={this.handleStopButtonPress}>
            <Text style={styles.text}>Pause</Text>
          </TouchableOpacity>
        </View>

      </>
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