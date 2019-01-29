import React from 'react';
import '../styles/outcome-based-transactions.css';

let Support = class Support extends React.Component {

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Your dedicated support manager'
      ),
      React.createElement(
        'div',
        null,
        React.createElement('img', { src: '../images/support.jpeg', width: '100' }),
        React.createElement(
          'h3',
          null,
          ' Antonija Burcul, Z\xFCrich, Switzerland ',
          React.createElement(
            'a',
            { href: 'mailto:antonija@four-corp.com' },
            'Email'
          )
        )
      )
    );
  }
};
export { Support as default };