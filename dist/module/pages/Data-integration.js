import React from 'react';
import '../styles/data-integration.css';

let Dataintegration = class Dataintegration extends React.Component {
  render() {
    return React.createElement(
      'div',
      { id: 'data-sources-tab' },
      React.createElement(
        'div',
        { id: 'data-sources-header' },
        React.createElement(
          'h1',
          { id: 'data-sources-title' },
          ' DATA SOURCES '
        )
      ),
      React.createElement(
        'div',
        { id: 'data-sources-in-transaction-header' },
        React.createElement('img', { src: '../images/data-sources/data-source-data-sources-in-transaction.png', alt: 'data-sources', id: 'source-img' }),
        React.createElement(
          'h2',
          { id: 'data-sources-title' },
          ' OUTCOME-CONTRACTED '
        )
      ),
      React.createElement(
        'div',
        { id: 'source-example' },
        React.createElement(
          'div',
          { id: 'source-header' },
          React.createElement('img', { src: '../images/data-sources/data-source-claims.png', alt: 'data-sources', id: 'source-img' }),
          React.createElement(
            'h2',
            { id: 'source-text' },
            ' CLAIMS '
          )
        ),
        React.createElement(
          'table',
          { id: 'data-source-parameters-table' },
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                ' ',
                React.createElement('img', { src: '../images/data-sources/data-source-patient-coverage.png', alt: 'data-sources', id: 'data-sources-img' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'data-sources-text' },
                  ' Patient coverage: 100% '
                )
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                ' ',
                React.createElement('img', { src: '../images/data-sources/data-source-validation.png', alt: 'data-sources', id: 'data-sources-img' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'data-sources-text' },
                  '  Validation method: internal billing infrastructure '
                )
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                ' ',
                React.createElement('img', { src: '../images/data-sources/data-source-outcomes-tracked.png', alt: 'data-sources', id: 'data-sources-img' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'data-sources-text' },
                  '  Outcomes tracked: '
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { id: 'data-sources-in-testing-header' },
        React.createElement('img', { src: '../images/data-sources/data-source-data-sources-in-testing.png', alt: 'data-sources', id: 'source-img' }),
        React.createElement(
          'h2',
          { id: 'data-sources-title' },
          ' TESTING PHASE '
        )
      ),
      React.createElement(
        'div',
        { id: 'source-example' },
        React.createElement(
          'div',
          { id: 'source-header' },
          React.createElement('img', { src: '../images/data-sources/data-source-wearable.png', alt: 'data-sources', id: 'source-img' }),
          React.createElement(
            'h2',
            { id: 'source-text' },
            ' EMFIT-SLEEP TRACKER'
          )
        ),
        React.createElement(
          'table',
          { id: 'data-source-parameters-table' },
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                ' ',
                React.createElement('img', { src: '../images/data-sources/data-source-patient-coverage.png', alt: 'data-sources', id: 'data-sources-img' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'data-sources-text' },
                  ' Patient coverage:'
                )
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                ' ',
                React.createElement('img', { src: '../images/data-sources/data-source-validation.png', alt: 'data-sources', id: 'data-sources-img' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'data-sources-text' },
                  '  Validation method: baseline study, testing period'
                )
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                ' ',
                React.createElement('img', { src: '../images/data-sources/data-source-outcomes-tracked.png', alt: 'data-sources', id: 'data-sources-img' })
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'data-sources-text' },
                  '  Outcomes tracked: quality of sleep '
                )
              )
            )
          )
        )
      )
    );
  }
};
export { Dataintegration as default };