import React from 'react';
import {AppRegistry} from 'react-native';
import  ChartListViewController from './src/ChartListViewController';
import ChartView from "./src/ChartView";

module.exports={
    ChartListViewController,
    ChartView,
}

AppRegistry.registerComponent('ChartListViewController', () => ChartListViewController)
AppRegistry.registerComponent('ChartView', () => ChartView)