/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  getPriceSeries,
  getIndenpendYAxis,
  getToolTipFormater,
  commonOption,
  padArrayAhead,
  getXAxis
} from "./common";



export function independentLineTransform({
  indicatorData,
  klineList,
  klineType,
}) {
  indicatorData = padArrayAhead(indicatorData, klineList.length);

  const options = {
    ...commonOption,
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const result = getToolTipFormater(params);
        return result;
      },
    },
    xAxis: [ getXAxis(klineList) ],
    yAxis: [],
    series: [],
  };

  if (klineList?.length) {
    options.yAxis.push({
      type: "value",
      name: "price($)",
      position:"right",
      splitLine: {
        show: false,
      },
    });
    const ser = getPriceSeries(klineList, klineType);
    options.series.push(ser);
  }

  if (indicatorData?.length) {
    options.yAxis.push(getIndenpendYAxis());
    options.series.push({
      name: "indicator",
      data: indicatorData.map((item) => item?.value),
      type: "line",
      areaStyle: {
        color: "rgba(0, 123, 255, 0.2)",
      },
      smooth: true,
      symbol: "none",
      yAxisIndex: 1,
    });
  }

  return options;
}
