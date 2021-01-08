import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import image from './start.jpg';
import { TodaySummary } from '../../components/todaySummary';


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
      isStartButtonVisible: true,
    };
  }



  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.start}>
          <Image
            source={image}
            style={styles.pauseButton}
          />
        </TouchableOpacity>

      </View>
    )
  }
}



