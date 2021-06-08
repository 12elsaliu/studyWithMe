import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonOne = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={['#5B8899', '#91B2BE']}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ButtonOne;
