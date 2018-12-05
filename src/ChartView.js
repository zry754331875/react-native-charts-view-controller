import React, { Component } from 'react'
import {StyleSheet, SafeAreaView, View,FlatList,processColor} from 'react-native';
import merge from 'deepmerge'
import PropTypes from 'prop-types';
import { combineMerge } from "./utils";
import {BarChart,
  HorizontalBarChart,
  BubbleChart,
  CandleStickChart,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart,
  CombinedChart,
} from 'react-native-charts-wrapper';

import {
  BarChartStyle,
  PieChartStyle,
  LineChartStyle,
  HorizontalBarChartStyle,
} from './DefaultStyle';

const Charts = {
    'BarChart':BarChart,
    'HorizontalBarChart':HorizontalBarChart,
    'BubbleChart':BubbleChart,
    'CandleStickChart':CandleStickChart,
    'LineChart':LineChart,
    'PieChart':PieChart,
    'RadarChart':RadarChart,
    'ScatterChart':ScatterChart,
    'CombinedChart':CombinedChart
  }
  
const ChartsStyles = {
  'BarChart':BarChartStyle,
  'PieChart':PieChartStyle,
  'LineChart':LineChartStyle,
  'HorizontalBarChart':HorizontalBarChartStyle
}

export class ChartView extends Component {

  render() {
    
    const {item,style} = this.props
    console.log(item)
    if(!ChartsStyles[item.type] || !Charts[item.type]){
      return (<View></View>)
    }
    
    let chartProps = merge(ChartsStyles[item.type],item.chartData,{ arrayMerge: combineMerge })

    return (
      <View style={{...style}}>
          {
            React.createElement(Charts[item.type],{...styles.chart,...chartProps})
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex:1
    }
  });

  ChartView.propTypes = {
    item:PropTypes.shape({
      type:PropTypes.oneOf["BarChart",
      "HorizontalBarChart",
      "BubbleChart",
      "CandleStickChart",
      "LineChart",
      "PieChart",
      "RadarChart",
      "ScatterChart",
      "CombinedChart"],
      chartData:PropTypes.object,
    })
  }

  export default ChartView