import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonOne from './ButtonOne';

export class TodaySummary extends React.Component {
  render() {
    return (
      <View style={{top: '80%'}}>
        <ButtonOne
          title={`You've focused for ${this.props.duration} today`}
          onPress={this.props.chart}
          size="sm"
        />
      </View>
    );
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
    width: 300,
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
