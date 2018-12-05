import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  processColor
} from "react-native";
import ChartView from "./ChartView";
import PropTypes from 'prop-types';

export class ChartListViewController extends Component {
  constructor(props) {
    super(props);

    // var demoData = {
    //   legend: {
    //     enabled: true,
    //     textSize: 14,
    //     form: "SQUARE",
    //     formSize: 14,
    //     xEntrySpace: 10,
    //     yEntrySpace: 5,
    //     formToTextSpace: 5,
    //     wordWrapEnabled: true,
    //     maxSizePercent: 0.5
    //   },
    //   data: {
    //     dataSets: [
    //       {
    //         values: [
    //           { y: 100 },
    //           { y: 105 },
    //           { y: 102 },
    //           { y: 110 },
    //           { y: 114 },
    //           { y: 109 },
    //           { y: 105 },
    //           { y: 99 },
    //           { y: 95 }
    //         ],
    //         label: "Bar dataSet",
    //         config: {
    //           color: processColor("teal"),
    //           barShadowColor: processColor("lightgrey"),
    //           highlightAlpha: 90,
    //           highlightColor: processColor("red")
    //         }
    //       }
    //     ]
    //   },
    //   xAxis: {
    //     valueFormatter: [
    //       "Jan",
    //       "Feb",
    //       "Mar",
    //       "Apr",
    //       "May",
    //       "Jun",
    //       "Jul",
    //       "Aug",
    //       "Sep"
    //     ],
    //     position: "BOTTOM",
    //     granularityEnabled: true,
    //     granularity: 1,
    //     labelCount: 10
    //   },
    //   yAxis: { left: { axisMinimum: 0 } }
    // };

    // console.log(JSON.stringify(demoData));
  }

  _keyExtractor = (_, index) => `${index}`;

  _renderItem = ({ item, index }) => {
    return <ChartView item={item} style={{height:300}}/>;
  };

  render() {
    const { data } = this.props;

    return (
      <SafeAreaView>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={data}
          renderItem={item => this._renderItem(item)}
        />
      </SafeAreaView>
    );
  }
}

ChartListViewController.propTypes = {
  data:PropTypes.arrayOf(PropTypes.shape(ChartView.propTypes))
}

export default ChartListViewController;
