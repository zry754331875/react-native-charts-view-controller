import {
  processColor
} from 'react-native';
import merge from 'deepmerge'
import {
  combineMerge
} from "./utils";

const CommonChartStyle = {
  animation: {
    durationX: 2000
  },
  highlights: [{
    x: 0
  }],
  chartDescription: {
    // text: "This is chart description",
    textSize: 15,
    textColor: processColor("darkgray")
  }
}

export const BarChartStyle = merge(CommonChartStyle, {
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
  xAxis: {
    // valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    granularityEnabled: true,
    granularity: 1,
  },
  gridBackgroundColor: processColor('#ffffff'),
  drawBarShadow: false,
  drawValueAboveBar: true,
  drawHighlightArrow: true,
}, {
  arrayMerge: combineMerge
})

export const PieChartStyle = merge(CommonChartStyle, {
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
        valueTextSize: 16,
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
  entryLabelColor: processColor('green'),
  entryLabelTextSize: 12,
  drawEntryLabels: false,
  rotationEnabled: true,
  rotationAngle: 45,
  usePercentValues: true,
  styledCenterText: {
    text: 'Pie center text!',
    color: processColor('pink'),
    size: 20
  },
  centerTextRadiusPercent: 100,
  holeRadius: 40,
  holeColor: processColor('#f0f0f0'),
  transparentCircleRadius: 45,
  transparentCircleColor: processColor('#f0f0f088'),
  maxAngle: 360,
}, {
  arrayMerge: combineMerge
})

export const LineChartStyle = merge(CommonChartStyle, {
  marker: {
    enabled: true,
    digits: 2,
    backgroundTint: processColor('teal'),
    markerColor: processColor('#F0C0FF8C'),
    textColor: processColor('white'),
  },
  xAxis: {
    granularityEnabled: true,
    granularity: 1,
  },
  gridBackgroundColor: processColor('#ffffff'),
  drawBarShadow: false,
  drawValueAboveBar: true,
  drawHighlightArrow: true,
  // visibleRange: {x: {min: 1, max: 2}}
}, {
  arrayMerge: combineMerge
})

export const HorizontalBarChartStyle = merge(CommonChartStyle,{
  legend: {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    formToTextSpace: 5,
    wordWrapEnabled: true,
    maxSizePercent: 0.5,
  },
  xAxis: {
    position: 'BOTTOM',
    granularityEnabled: true,
    granularity: 1,
    labelCount: 10,
  },
  yAxis: {left:{axisMinimum: 0}}
},{
  arrayMerge: combineMerge
})