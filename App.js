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
import AsyncStorage from '@react-native-async-storage/async-storage';

function formatFocusedToday(ms) {
  return Duration.fromMillis(ms).toFormat('hh:mm:ss');
}


function formatDate(date) {
  return date.toJSON().slice(0, 10);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStartedAt: null,
      focusedToday: 0
    };
  };

  readCurrentDuration = async () => {
    const currentDate = formatDate(new Date());
    const todayFocus = await AsyncStorage.getItem(currentDate);

    if (!todayFocus) {
      return 0;
    }

    return Number.parseInt(todayFocus, 10);
  };


  addToCurrentDuration = async (value) => {
    const currentDuration = await this.readCurrentDuration();
    const updatedDuration = currentDuration + value;

    const currentDate = formatDate(new Date());

    await AsyncStorage.setItem(currentDate, String(updatedDuration));
    return updatedDuration;
  }

  handleClickStop = async () => {
    const timerDuration = new Date() - this.state.timerStartedAt;
    const focusedToday = await this.addToCurrentDuration(timerDuration);

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
    const focusedToday = await this.readCurrentDuration();

    this.setState({ focusedToday })
  }

  render() {
    if (this.state.timerStartedAt) {
      return (
        <>
          <Time onStop={this.handleClickStop} />
          <TodaySummary duration={formatFocusedToday(this.state.focusedToday)} />
        </>
      )
    } else {
      return (
        <>
          <Start start={this.handleClickStart} />
          <TodaySummary duration={formatFocusedToday(this.state.focusedToday)} />
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
