/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ImageBackground, View, Text, Image} from 'react-native';

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
import robot1 from './images/robot1.png';

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
          <ImageBackground
            source={require('./images/back3.jpg')}
            style={styles.image}>
            <Text
              style={{
                top: '20%',
                textAlign: 'center',
                width: '60%',
                left: '35%',
              }}>
              R2-D3 will accompany you for the first 50 hours study journey
            </Text>
            <Text
              style={{
                top: '20%',
                textAlign: 'right',
                width: '60%',
                left: '35%',
              }}>
              (unlock other characters after 50h)
            </Text>
            <Time onStop={this.handleClickStop} />
            <View style={{flexDirection: 'column'}}>
              <Image
                source={robot1}
                style={{marginLeft: '10%', marginBottom: '10%'}}
              />
            </View>
          </ImageBackground>
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
            chart={this.handleClickChartEntry}
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
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require('./images/back2.jpg')}
            style={styles.image}>
            {mainFunction()}
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default App;
