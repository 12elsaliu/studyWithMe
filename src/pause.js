import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import image from './pause.png';

const styles = StyleSheet.create(
  {
    pauseButton: {
      width: 130,
      height: 130,
    },

    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)

export class Pause extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { console.log('123') }}>
          <Image
            source={image}
            style={styles.pauseButton}
          />
        </TouchableOpacity>

      </View>
    )
  }
}



