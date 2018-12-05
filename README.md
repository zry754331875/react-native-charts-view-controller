# React-native-charts-view-controller

## Introduction
Base on [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper).

## Supported Chart Type
- BarChart
- HorizontalBarChart
- LineChart
- PieChart
### Will To DO
- BubbleChart
- CandleStickChart
- RadarChart
- ScatterChart
- CombinedChart

## Steps
 1. Install By [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper)
 2. npm i react-native-charts-view-controller
 3. import ChartsViewController like this.
 ```
import  {ChartsViewController} from 'react-native-charts-view-controller';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ChartsViewController data={[]}>
      </ChartsViewController>
    );
  }
} 
```

## Data-Format
```
"data": [{
        "type": "BarChart",
        "chartData": {
	        ...chartProps
        }
    }, {
        "type": "PieChart",
        "chartData": {
            ...chartProps
        }
    }]
```
About ChartProps You can see [this](https://github.com/wuxudong/react-native-charts-wrapper/blob/master/docs.md)


