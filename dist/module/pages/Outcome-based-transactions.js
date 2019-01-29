import React from 'react';
import '../styles/outcome-based-transactions.css';

import { BarChart, LineChart, PieChart, RowChart, ScatterPlot, SeriesChart } from '../../src/react-dc';
import '../../dist/react-dc.css';
import trans from './transactions';
import crossfilter from 'crossfilter';
import d3 from 'd3';
import dc from 'dc';

const scale = d3.scale.ordinal().range(d3.svg.symbolTypes);

const colors = ['#66cbde', '#d4f3a2', '#515d6b', '#dcf5b4', '#ff7f00', '#ffff33', '#a65628'];

const data = crossfilter(trans);
const byWeek = data.dimension(trans => trans.weeks);
const byWeekGroup = byWeek.group().reduceSum(trans => +trans.cost);

let Outcometransactions = class Outcometransactions extends React.Component {
  render() {
    return React.createElement(
      'div',
      { style: { float: 'left', width: '800px' } },
      React.createElement(
        'h3',
        null,
        'Transaction Volume'
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { float: 'left', width: '800px' } },
          React.createElement(LineChart, {
            dimension: byWeek,
            group: byWeekGroup,
            x: d3.scale.linear().domain([1, 24]),
            renderHorizontalGridLines: true,
            xAxisLabel: 'Weeks',
            yAxisLabel: "Millions of Euros €",
            elasticX: true,
            renderArea: true,
            xyTipsOn: true,
            brushOn: false,
            ordinalColors: colors
          })
        ),
        React.createElement('div', { style: { clear: 'both' } })
      )
    );
  }
};
export { Outcometransactions as default };