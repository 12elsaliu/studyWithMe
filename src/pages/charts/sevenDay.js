import { loadHistoryDuration } from '../../storage';
import { BarChart } from 'react-native-chart-kit';
import React from 'react';
import { Dimensions, View, Text, StyleSheet } from "react-native";

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
    color: 'black',
  },
});

export class SevenDay extends React.Component {
  state = {
    daysList: ["January", "February", "March", "April", "May", "June"],
    durationList: []
  }

  async componentDidMount() {
    const { daysList, durationList } = await loadHistoryDuration(7);
    this.setState({
      daysList,
      durationList
    })

  }

  render() {
    const data = {
      labels: this.state.daysList,
      datasets: [
        {
          data: this.state.durationList
        }
      ]
    };

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Seven Day Summary (hours)</Text>
        <BarChart
          data={data}
          width={screenWidth}
          height={220}
          // yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={45}
        />
      </View>
    )
  }
}