import React from 'react'
import '../styles/outcomes.css';

import {BarChart, LineChart, PieChart} from '../../src/react-dc'
import '../../dist/react-dc.css'
import patient from './patient'
import crossfilter from 'crossfilter'
import d3 from 'd3'
import dc from 'dc'

const scale = d3.scale.ordinal().range(d3.svg.symbolTypes)
const colors = ['#66cbde','#d4f3a2','#515d6b','#dcf5b4','#ff7f00','#ffff33','#a65628']

const data = crossfilter(patient)
const byHospital = data.dimension(patient => patient.hospital)
const byRisk = data.dimension(patient => patient.risk)
const byWeek = data.dimension(patient => patient.week+1)
const byHospitalGroup = byHospital.group().reduceCount()
const byRiskGroup = byRisk.group().reduceCount()
const byWeekGroup = byWeek.group().reduceCount(patient => -patient.cost)
 
export default class Outcomes extends React.Component {
  render() {
    return (
  <div style={{float: 'left', width: '800px'}}>
    <h3>Utilization Costs</h3>
    <BarChart
      dimension={byWeek}
      group={byWeekGroup}
      x={d3.scale.linear().domain([1,24])}
      renderHorizontalGridLines={true}
      elasticX={true}
      xAxisLabel={'Weeks'}
      yAxisLabel={"Thousands of Euros €"}
      ordinalColors={colors}
    />
      <div style={{float: 'left'}}>
    <h3>Costs by Risk</h3>
        <PieChart
          dimension={byRisk}
          group={byRiskGroup}
          slicesCap={5}
          ordering={d => -d.value}
          ordinalColors={colors}
          height={180}
        />
      </div>
      <div style={{float: 'right'}}>
    <h3>Costs by Bone Density</h3>
        <PieChart
          dimension={byHospital}
          group={byHospitalGroup}
          slicesCap={5}
          ordering={d => -d.value}
          ordinalColors={colors}
          height={180}
          renderLabel={true}
        />
      </div>
      <div style={{clear: 'both'}}></div>
          <div id="patient-subpopulations">

          <div id="subpop-header">
<h4 id="subpop-text"> </h4>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

          <img src="../images/subpopulations-characteristics/subpop-person-char.png" alt="data-sources" id="person-char"/>
          <h2 id="subpop-text"> SUBPOPULATION CHARACTERISTICS </h2>
</div>
          <div id="patient-char">
          <h2 id="char-text"> Age: </h2>
          <h2 id="char-text"> Activity: </h2>
          <h2 id="char-text"> Hematocrit: </h2>
          </div>
  </div>
  </div>

);
  }
}
