import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, AppState} from 'react-native';
import {Timer, FlipNumber} from 'react-native-flip-timer';

export class Time extends React.Component {
  handleStopButtonPress = () => {
    this.props.onStop();
  };

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleStopButtonPress);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleStopButtonPress);
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Timer time={0} play={true} />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleStopButtonPress}>
            <Text style={styles.text}>Pause</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    top: '40%',
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
