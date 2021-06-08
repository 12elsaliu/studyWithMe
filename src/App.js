/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Start} from './pages/start/start';
import {Time} from './pages/timer/timer';
import {TodaySummary} from './components/todaySummary';
import Duration from 'luxon/src/duration.js';
import {Service} from './service';
import {SevenDay} from './pages/charts/sevenDay';
import KeepAwake from 'react-native-keep-awake';
import {SignIn} from './pages/signIn/signInPage';
import {Setting} from './pages/setting';
import {Storage} from './storage';

function formatFocusedToday(ms) {
  return Duration.fromMillis(ms).toFormat('hh:mm:ss');
}

const initialState = {
  timerStartedAt: null,
  focusedToday: 0,
  chartPage: null,
  signedIn: false,
  settingPage: null,
  userId: undefined,
};
class App extends React.Component {
  state = {
    timerStartedAt: null,
    focusedToday: 0,
    chartPage: null,
    signedIn: false,
    settingPage: null,
    userId: undefined,
  };

  handleClickStop = async () => {
    const timerDuration = new Date() - this.state.timerStartedAt;
    const focusedToday = await this.service.addToCurrentDuration(timerDuration);

    this.setState({
      timerStartedAt: null,
      focusedToday,
    });
  };

  handleClickStart = () => {
    this.setState({
      timerStartedAt: new Date(),
    });
    KeepAwake.activate();
  };

  // async componentDidMount() {
  //   console.log(this.service, 'here service')
  //  // const focusedToday = await this.service.readCurrentDuration();

  //   this.setState({ focusedToday })
  // };

  handleClickChartEntry = () => {
    this.setState({
      chartPage: true,
    });
  };

  handleClickChartExit = () => {
    this.setState;
    this.setState({
      chartPage: null,
    });
  };

  handleSignin = async (userInfo) => {
    const userId = userInfo.user.id;

    this.setState({
      signedIn: true,
      userId: userInfo.user.id,
    });
    this.service = new Service(new Storage(userId));
    this.handleUpdate();
  };

  handleUpdate = async () => {
    const focusedToday = await this.service.readCurrentDuration();
    this.setState({
      focusedToday,
    });
  };

  handleClickSettingPage = () => {
    this.setState({
      settingPage: true,
    });
  };

  handleSettingExit = () => {
    this.setState({
      settingPage: null,
    });
  };

  handleSignOut = () => {
    this.setState(initialState);
  };

  render() {
    const mainFunction = () => {
      const timerStartedPage = (
        <>
          <Time onStop={this.handleClickStop} />
          <TodaySummary
            duration={formatFocusedToday(this.state.focusedToday)}
          />
        </>
      );

      const timerStoppedPage = (
        <>
          <Start
            start={this.handleClickStart}
            goToSettingPage={this.handleClickSettingPage}
          />
          <TodaySummary
            duration={formatFocusedToday(this.state.focusedToday)}
          />
        </>
      );

      const chartPage = (
        <>
          <SevenDay
            backToStartPage={this.handleClickChartExit}
            userId={this.state.userId}
          />
        </>
      );

      const settingPage = (
        <>
          <Setting
            backToStartPage={this.handleSettingExit}
            goToChartPage={this.handleClickChartEntry}
            isSignOut={this.handleSignOut}
          />
        </>
      );

      if (this.state.chartPage) {
        return chartPage;
      }

      if (this.state.timerStartedAt) {
        return timerStartedPage;
      }

      if (this.state.settingPage) {
        return settingPage;
      }

      return timerStoppedPage;
    };

    if (!this.state.signedIn) {
      return (
        <>
          <SignIn handleSignin={this.handleSignin} />
        </>
      );
    } else {
      return <>{mainFunction()}</>;
    }
  }
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
