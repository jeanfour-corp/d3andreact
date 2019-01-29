import React from 'react';
import '../styles/styles.css';

let Users = class Users extends React.Component {

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'table',
        { id: 'customers' },
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Name'
          ),
          React.createElement(
            'th',
            null,
            'Surname'
          ),
          React.createElement(
            'th',
            null,
            'Position'
          ),
          React.createElement(
            'th',
            null,
            'User Role'
          ),
          React.createElement(
            'th',
            null,
            'Last Login'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Daniel'
          ),
          React.createElement(
            'td',
            null,
            'Bernoulli'
          ),
          React.createElement(
            'td',
            null,
            'Lead'
          ),
          React.createElement(
            'td',
            null,
            'Administrator'
          ),
          React.createElement(
            'td',
            null,
            'Fri Jan 25 2019 15:37 GMT +0100 (CEST)'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Roger'
          ),
          React.createElement(
            'td',
            null,
            'Federer'
          ),
          React.createElement(
            'td',
            null,
            'Associate'
          ),
          React.createElement(
            'td',
            null,
            'Basic User Level Access'
          ),
          React.createElement(
            'td',
            null,
            'Mon Jan 21 2019 17:45 GMT +0100 (CEST)'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Leonhard'
          ),
          React.createElement(
            'td',
            null,
            'Euler'
          ),
          React.createElement(
            'td',
            null,
            'Associate'
          ),
          React.createElement(
            'td',
            null,
            'Basic User Level Access'
          ),
          React.createElement(
            'td',
            null,
            'Thur Jan 24 2019 17:54 GMT +0100 (CEST)'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Stephan'
          ),
          React.createElement(
            'td',
            null,
            'Lichtsteiner'
          ),
          React.createElement(
            'td',
            null,
            'Associate'
          ),
          React.createElement(
            'td',
            null,
            'Basic User Level Access'
          ),
          React.createElement(
            'td',
            null,
            'Wed Jan 23 2019 11:29 GMT +0100 (CEST)'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Clive'
          ),
          React.createElement(
            'td',
            null,
            'Bucher'
          ),
          React.createElement(
            'td',
            null,
            'Associate'
          ),
          React.createElement(
            'td',
            null,
            'Basic User Level Access'
          ),
          React.createElement(
            'td',
            null,
            'Mon Jan 21 2019 17:45 GMT +0100 (CEST)'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Andreas'
          ),
          React.createElement(
            'td',
            null,
            'Meyer'
          ),
          React.createElement(
            'td',
            null,
            'Associate'
          ),
          React.createElement(
            'td',
            null,
            'Basic User Level Access'
          ),
          React.createElement(
            'td',
            null,
            'Tues Jan 22 2019 16:50 GMT +0100 (CEST)'
          )
        )
      ),
      React.createElement(
        'div',
        { style: { float: 'right' } },
        React.createElement(
          'button',
          null,
          'Add New User'
        )
      )
    );
  }
};
export { Users as default };