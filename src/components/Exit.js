import React from 'react';
import {TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';
import exit from '../images/exit.png';

var {height, width} = Dimensions.get('window');

const Exit = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={exit} style={styles.exitButton} />
    </TouchableOpacity>
  );
};

export default Exit;

const styles = StyleSheet.create({
  exitButton: {
    width: 35,
    height: 35,
    marginTop: height * 0.05,
    marginLeft: width * 0.02,
    // top: 35,
    // left: 10,
  },
});
