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
import { TodaySummary } from './src/components/todaySummary';
import Duration from 'luxon/src/duration.js';
import { readCurrentDuration, addToCurrentDuration } from './src/storage';

function formatFocusedToday(ms) {
  return Duration.fromMillis(ms).toFormat('hh:mm:ss');
}


class App extends React.Component {

  state = {
    timerStartedAt: null,
    focusedToday: 0
  };

  handleClickStop = async () => {
    const timerDuration = new Date() - this.state.timerStartedAt;
    const focusedToday = await addToCurrentDuration(timerDuration);

    this.setState({
      timerStartedAt: null,
      focusedToday
    });
  }

  handleClickStart = () => {
    this.setState({
      timerStartedAt: new Date()
    })
  };

  async componentDidMount() {
    const focusedToday = await readCurrentDuration();

    this.setState({ focusedToday })
  }

  render() {

    const mainComponent = this.state.timerStartedAt
      ? <Time onStop={this.handleClickStop} />
      : <Start start={this.handleClickStart} />

    return (
      <>
        {mainComponent}
        <TodaySummary duration={formatFocusedToday(this.state.focusedToday)} />
      </>
    )
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
