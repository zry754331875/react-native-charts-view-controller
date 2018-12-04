import React, { Component } from 'react'
import {StyleSheet, SafeAreaView, View,FlatList,processColor} from 'react-native';
import merge from 'deepmerge'
import { combineMerge } from "./utils";
import {BarChart,
  HorizontalBarChart,
  BubbleChart,
  CandleStickChart,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart,
  CombinedChart} from 'react-native-charts-wrapper';

import {
  BarChartStyle,
  PieChartStyle
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
}

export class ChartListViewController extends Component {

  constructor(props){
    super(props)

    var demoData = {
      legend: {
        enabled: true,
        textSize: 15,
        form: "CIRCLE",

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [
          {
            values: [
              { value: 45, label: "Sandwiches" },
              { value: 21, label: "Salads" },
              { value: 15, label: "Soup" },
              { value: 9, label: "Beverages" },
              { value: 15, label: "Desserts" }
            ],
            label: "Pie dataset",
            config: {
              colors: [
                processColor("#C0FF8C"),
                processColor("#FFF78C"),
                processColor("#FFD08C"),
                processColor("#8CEAFF"),
                processColor("#FF8C9D")
              ],
              valueTextSize: 20,
              valueTextColor: processColor("green"),
              sliceSpace: 5,
              selectionShift: 13,
              // xValuePosition: "OUTSIDE_SLICE",
              // yValuePosition: "OUTSIDE_SLICE",
              valueFormatter: "#.#'%'",
              valueLineColor: processColor("green"),
              valueLinePart1Length: 0.5
            }
          }
        ]
      },
      highlights: [{ x: 2 }],
      description: {
        text: "This is Pie chart description",
        textSize: 15,
        textColor: processColor("darkgray")
      }
    };

    console.log(JSON.stringify(demoData))
  }

  _keyExtractor = (_,index)=>`${index}`

  _renderItem=({item,index})=>{
    console.log('item',item)

    if(!ChartsStyles[item.type] || !Charts[item.type]){
      return (<View></View>)
    }

    let chartProps = merge(ChartsStyles[item.type],item.chartData,{ arrayMerge: combineMerge })
    console.log('chartProps',chartProps)
    return (
      <View style={{...styles.container}}>
          {
            React.createElement(Charts[item.type],{...styles.chart,...chartProps})
          }
      </View>
    )
  }

  render() {
    
    const {data} = this.props

    return (
      <SafeAreaView>
          <FlatList
            keyExtractor={this._keyExtractor}
            data={data}
            renderItem={(item)=>this._renderItem(item)}
          />
      </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      height:300,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex:1
    }
  });

export default ChartListViewController
