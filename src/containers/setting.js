import React from 'react';
import {SignOut} from './../components/signOut';
import {Start} from '../containers/start/start';
import ButtonOne from '../components/ButtonOne';
import Exit from '../components/Exit';
import {View, Dimensions} from 'react-native';

var {height} = Dimensions.get('window');

export class Setting extends React.Component {
  state = {
    user: true,
  };

  render() {
    if (this.state.user) {
      return (
        <>
          <View>
            <View>
              <Exit onPress={this.props.backToStartPage} />
            </View>

            <View style={{marginTop: height * 0.25}}>
              <ButtonOne
                title="History Review"
                onPress={this.props.goToChartPage}
                size="sm"
              />
              <SignOut isSignOut={this.props.isSignOut} />
            </View>
          </View>
        </>
      );
    } else {
      return <Start />;
    }
  }
}
