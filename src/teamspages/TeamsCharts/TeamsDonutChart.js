import * as React from 'react';
import { DonutChart } from '@uifabric/charting';

const chartTitle = 'Stacked Bar chart example';

const points = [
  { legend: 'first', data: 20000, color: '#E5E5E5', xAxisCalloutData: '2020/04/30' },
  { legend: 'second', data: 39000, color: '#0078D4', xAxisCalloutData: '2020/04/20' },
];
const data = {
  chartTitle: chartTitle,
  chartData: points,
};



export default function TeamsDonutChart() {
  return (
    <DonutChart
      data={data}
      innerRadius={55}
      legendsOverflowText={'overflow Items'}
      hideLegend={true}
      height={220}
      width={176}
      valueInsideDonut={39000}
      styles={{color: "white"}}
      
    />
  );
}

