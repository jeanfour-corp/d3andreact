import React from 'react';
import '../styles/outcome-based-transactions.css';

import {BarChart, LineChart, PieChart, RowChart, ScatterPlot, SeriesChart} from '../../src/react-dc'
import '../../dist/react-dc.css'
import trans from './transactions'
import crossfilter from 'crossfilter'
import d3 from 'd3'
import dc from 'dc'

const scale = d3.scale.ordinal().range(d3.svg.symbolTypes)

const colors = ['#66cbde','#d4f3a2','#515d6b','#dcf5b4','#ff7f00','#ffff33','#a65628']

const data = crossfilter(trans)
const byWeek = data.dimension(trans => trans.weeks)
const byWeekGroup = byWeek.group().reduceSum(trans => +trans.cost)

export default class Outcometransactions extends React.Component {
  render() {
    return (
  <div style={{float: 'left', width: '800px'}}>
    <h3>Transaction Volume</h3>
    <div>
      <div style={{float: 'left', width: '800px'}}>
        <LineChart
          dimension={byWeek}
          group={byWeekGroup}
          x={d3.scale.linear().domain([1,24])}
          renderHorizontalGridLines={true}
          xAxisLabel={'Weeks'}
          yAxisLabel={"Millions of Euros €"}
          elasticX={true}
          renderArea={true}
          xyTipsOn={true}
          brushOn={false}
          ordinalColors={colors}
        />
      </div>
      <div style={{clear: 'both'}}></div>
    </div>

  </div>

);
  }
}
