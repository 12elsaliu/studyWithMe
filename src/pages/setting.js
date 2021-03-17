import React from 'react';
import { SignOut } from './../components/signOut'
import { Start } from '../pages/start/start';
import exit from '../images/exit.png';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import entry from '../images/chartEntry.jpg'

export class Setting extends React.Component {
  state = {
    user: true
  }

  render() {
    if (this.state.user) {
      return (
        <>
          <View>
            <View style={styles.exitContainer} >
              < TouchableOpacity onPress={this.props.backToStartPage}>
                <Image
                  source={exit}
                  style={styles.exitButton}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.settingItems}>
              <View style={styles.entryContainer}>
                < TouchableOpacity onPress={this.props.goToChartPage}>
                  <Image
                    source={entry}
                    style={styles.iconStyle}
                  />
                  <Text style={styles.text} >Chart</Text>
                </TouchableOpacity>
              </View>

              <SignOut isSignOut={this.props.isSignOut} />
            </View>


          </View>

        </>
      )
    } else {
      return <Start />
    }

  }
}

const styles = StyleSheet.create({
  exitButton: {
    width: 35,
    height: 35,
    top: 35,
    left: 10,
    zIndex: 100
  },
  entryContainer: {
    top: 80,
    left: 60,
    height: 30,
    flexDirection: 'row',


  },
  iconStyle: {
    position: 'absolute',
    width: 45,
    height: 50,
    right: 20
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    position: 'relative',
    left: 35,

  },
  settingItems: {
    top: 140,
  }
})