import {
  processColor
} from 'react-native';

export const BarChartStyle = {
  legend: {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    formToTextSpace: 5,
    wordWrapEnabled: true,
    maxSizePercent: 0.5
  },
  data: {
    dataSets: [{
      config: {
        color: processColor('teal'),
        barShadowColor: processColor('lightgrey'),
        highlightAlpha: 90,
        highlightColor: processColor('red'),
      }
    }],
    config: {
      barWidth: 0.7,
    }
  },
  highlights: [{
    x: 0
  }],
  xAxis: {
    // valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    granularityEnabled: true,
    granularity: 1,
  }
}

export const PieChartStyle = {
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
    dataSets: [{
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
    }]
  },
  highlights: [{
    x: 0
  }],
  description: {
    text: "This is Pie chart description",
    textSize: 15,
    textColor: processColor("darkgray")
  }
}