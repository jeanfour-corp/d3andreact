import React from 'react';
import '../styles/outcomes.css';

import { BarChart, LineChart, PieChart } from '../../src/react-dc';
import '../../dist/react-dc.css';
import patient from './patient';
import crossfilter from 'crossfilter';
import d3 from 'd3';
import dc from 'dc';

const scale = d3.scale.ordinal().range(d3.svg.symbolTypes);
const colors = ['#66cbde', '#d4f3a2', '#515d6b', '#dcf5b4', '#ff7f00', '#ffff33', '#a65628'];

const data = crossfilter(patient);
const byHospital = data.dimension(patient => patient.hospital);
const byRisk = data.dimension(patient => patient.risk);
const byWeek = data.dimension(patient => patient.week + 1);
const byHospitalGroup = byHospital.group().reduceCount();
const byRiskGroup = byRisk.group().reduceCount();
const byWeekGroup = byWeek.group().reduceCount(patient => -patient.cost);

let Outcomes = class Outcomes extends React.Component {
  render() {
    return React.createElement(
      'div',
      { style: { float: 'left', width: '800px' } },
      React.createElement(
        'h3',
        null,
        'Utilization Costs'
      ),
      React.createElement(BarChart, {
        dimension: byWeek,
        group: byWeekGroup,
        x: d3.scale.linear().domain([1, 24]),
        renderHorizontalGridLines: true,
        elasticX: true,
        xAxisLabel: 'Weeks',
        yAxisLabel: "Thousands of Euros €",
        ordinalColors: colors
      }),
      React.createElement(
        'div',
        { style: { float: 'left' } },
        React.createElement(
          'h3',
          null,
          'Costs by Risk'
        ),
        React.createElement(PieChart, {
          dimension: byRisk,
          group: byRiskGroup,
          slicesCap: 5,
          ordering: d => -d.value,
          ordinalColors: colors,
          height: 180
        })
      ),
      React.createElement(
        'div',
        { style: { float: 'right' } },
        React.createElement(
          'h3',
          null,
          'Costs by Bone Density'
        ),
        React.createElement(PieChart, {
          dimension: byHospital,
          group: byHospitalGroup,
          slicesCap: 5,
          ordering: d => -d.value,
          ordinalColors: colors,
          height: 180,
          renderLabel: true
        })
      ),
      React.createElement('div', { style: { clear: 'both' } }),
      React.createElement(
        'div',
        { id: 'patient-subpopulations' },
        React.createElement(
          'div',
          { id: 'subpop-header' },
          React.createElement(
            'h4',
            { id: 'subpop-text' },
            ' '
          ),
          React.createElement(
            'table',
            null,
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                ),
                React.createElement(
                  'td',
                  null,
                  '\xA0'
                )
              )
            )
          ),
          React.createElement('img', { src: '../images/subpopulations-characteristics/subpop-person-char.png', alt: 'data-sources', id: 'person-char' }),
          React.createElement(
            'h2',
            { id: 'subpop-text' },
            ' SUBPOPULATION CHARACTERISTICS '
          )
        ),
        React.createElement(
          'div',
          { id: 'patient-char' },
          React.createElement(
            'h2',
            { id: 'char-text' },
            ' Age: '
          ),
          React.createElement(
            'h2',
            { id: 'char-text' },
            ' Activity: '
          ),
          React.createElement(
            'h2',
            { id: 'char-text' },
            ' Hematocrit: '
          )
        )
      )
    );
  }
};
export { Outcomes as default };