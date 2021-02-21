import { Service } from '../../service';
import { BarChart } from 'react-native-chart-kit';
import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import image from '../../images/exit.png';
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import { DateTime } from 'luxon';


const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "black",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  exitButton: {
    width: 35,
    height: 35,
    top: 35,
    left: 10,
    zIndex: 100
  },

  leftArrow: {
    width: 20,
    height: 20,
    position: 'relative',
    right: 25
  },

  rightArrow: {
    width: 20,
    height: 20,
    position: 'relative',
    left: 25
  },

  exitContainer: {
    position: 'absolute',
    top: 7,
    left: 10
  },

  chartContainer: {
    position: 'relative',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wholeContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },

  arrowContainer: {
    position: 'relative',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center'


  }
});

export class SevenDay extends React.Component {

  state = {
    daysList: [],
    durationList: [],
    week: 0
  }


  async componentDidMount() {
    this.service = new Service(new Storage(this.props.userId))
    const { daysList, durationList } = await this.service.loadHistoryDuration(7, this.state.week);
    this.setState({
      daysList,
      durationList,
    })

  }

  handleBackWeek = async () => {
    let backWeek = this.state.week + 1;
    const { daysList, durationList } = await this.service.loadHistoryDuration(7, backWeek);
    this.setState({
      daysList,
      durationList,
      week: backWeek
    })
  }

  handleForwardWeek = async () => {
    if (this.state.week > 0) {
      let forwardWeek = this.state.week - 1
      const { daysList, durationList } = await this.service.loadHistoryDuration(7, forwardWeek);
      this.setState({
        daysList,
        durationList,
        week: forwardWeek
      })
    }
  }

  render() {
    const data = {
      labels: this.state.daysList.map(date => DateTime.fromJSDate(date).toFormat('LL-dd')),

      datasets: [
        {
          data: this.state.durationList
        }
      ]
    };
    return (
      <View style={styles.wholeContainer}>
        <View style={styles.exitContainer} >
          < TouchableOpacity onPress={this.props.backToStartPage}>
            <Image
              source={image}
              style={styles.exitButton}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={this.handleBackWeek}>
            <Image
              source={leftArrow}
              style={styles.leftArrow}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleForwardWeek}>
            <Image
              source={rightArrow}
              style={styles.rightArrow}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chartContainer}>

          <Text style={styles.text}>7 Day Summary (hours)</Text>
          <BarChart
            data={data}
            width={screenWidth}
            height={220}
            // yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={20}
          >
            <Image
              source={leftArrow}
              style={styles.leftArrow}
            />

            <Image
              source={rightArrow}
              style={styles.rightArrow}
            />
          </BarChart>
        </View>
      </View>
    )
  }
}