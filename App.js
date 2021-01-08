/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet, View
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Start } from './src/pages/start/start';
import { Time } from './src/pages/timer/timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false
    };
    this.handleClickStart = this.handleClickStart.bind(this);
  };

  handleClickStart() {
    this.setState({ timerStarted: !this.state.timerStarted })
    console.log(this.state.timerStarted)
      ;
  };

  render() {
    if (this.state.timerStarted) {
      return (
        <>
          <Time play={this.handleClickStart} />
        </>
      )
    } else {
      return (
        <>
          <Start start={this.handleClickStart} />

        </>
      );
    }
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
