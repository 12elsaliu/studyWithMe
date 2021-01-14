import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class TodaySummary extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Today Focused {this.props.duration}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    right: 10,
    borderRadius: 5,
    height: 50,
    width: 300
  },
  button: {
    height: 40,
    backgroundColor: '#333333',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});