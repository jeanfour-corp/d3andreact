import React from 'react';
import { Link } from 'react-router-dom';

let Mainlayout = class Mainlayout extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'top-container' },
      React.createElement(
        'div',
        { id: 'user-header' },
        React.createElement('img', { src: '../images/partners/partner-logos/amgen-logo.svg', alt: 'user-logo', id: 'user-logo' })
      ),
      React.createElement('div', { id: 'user-header-strip' }),
      React.createElement(
        'div',
        { id: 'dashboard' },
        React.createElement(
          'div',
          { id: 'main-menu' },
          React.createElement(
            Link,
            { to: '/home' },
            React.createElement('img', { src: '../images/main-menu/home-min.png', id: 'image-props', alt: 'home' }),
            React.createElement(
              'span',
              null,
              ' HOME  '
            )
          ),
          React.createElement(
            Link,
            { to: '/outcomes' },
            React.createElement('img', { src: '../images/main-menu/clinical-endpoints.png', id: 'image-props', alt: 'outcomes' }),
            React.createElement(
              'span',
              null,
              ' OUTCOMES  '
            )
          ),
          React.createElement(
            Link,
            { to: '/dataintegration' },
            React.createElement('img', { src: '../images/main-menu/data-integration.png', id: 'image-props', alt: 'dataint' }),
            React.createElement(
              'span',
              null,
              ' DATA SOURCES '
            )
          ),
          React.createElement(
            Link,
            { to: '/partners' },
            React.createElement('img', { src: '../images/main-menu/partners.png', id: 'image-props', alt: 'partners' }),
            React.createElement(
              'span',
              null,
              ' CONTRACTS '
            )
          ),
          React.createElement(
            Link,
            { to: '/outcometransactions' },
            React.createElement('img', { src: '../images/main-menu/outcome-based-transactions.png', id: 'image-props', alt: 'outcome-transactions' }),
            React.createElement(
              'span',
              null,
              ' PAYMENTS '
            )
          ),
          React.createElement(
            Link,
            { to: '/users' },
            React.createElement('img', { src: '../images/main-menu/users.png', id: 'image-props', alt: 'outcomes' }),
            React.createElement(
              'span',
              null,
              ' USERS  '
            )
          ),
          React.createElement(
            Link,
            { to: '/support' },
            React.createElement('img', { src: '../images/main-menu/support.png', id: 'image-props', alt: 'outcomes' }),
            React.createElement(
              'span',
              null,
              ' SUPPORT  '
            )
          )
        ),
        React.createElement(
          'div',
          { id: 'info-box' },
          React.createElement(
            'div',
            { style: { float: 'right' } },
            React.createElement(
              'button',
              null,
              'Logout'
            )
          ),
          React.createElement(
            'table',
            { id: 'info-box-table' },
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
                  React.createElement('img', { src: '../images/info-box/info-box-periodicity.png', alt: 'info-box', id: 'info-box-img' })
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'span',
                    { className: 'info-box-text' },
                    ' PERIODICITY: 4 months '
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
                  React.createElement('img', { src: '../images/info-box/info-box-field-oncology.png', alt: 'info-box', id: 'info-box-img' })
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'span',
                    { className: 'info-box-text' },
                    '  ONCOLOGY: polycythemia vera '
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
                  React.createElement('img', { src: '../images/info-box/info-box-outcomes-tracked.png', alt: 'info-box', id: 'info-box-img' })
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'span',
                    { className: 'info-box-text' },
                    '  OUTCOMES TRACKED: hematocrit, activity, quality of sleep  '
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
                  React.createElement('img', { src: '../images/info-box/info-box-outcomes-baseline.png', alt: 'info-box', id: 'info-box-img' })
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'span',
                    { className: 'info-box-text' },
                    '  OUTCOMES BASELINE '
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { id: 'main' },
          this.props.children
        )
      )
    );
  }
};
export { Mainlayout as default };