import React from 'react';
import '../styles/partners.css';

let Insurers = class Insurers extends React.Component {
  render() {
    return React.createElement(
      'div',
      { id: 'partners-tab' },
      React.createElement(
        'div',
        { id: 'existing-partners-header' },
        React.createElement('img', { src: '../images/partners/existing-partners.png', alt: 'existing-partners', id: 'existing-partners-img' }),
        React.createElement(
          'h1',
          { id: 'existing-partners-title' },
          ' PARTNERS '
        )
      ),
      React.createElement(
        'div',
        { id: 'existing-partners-table' },
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
                { className: 'logo' },
                ' ',
                React.createElement('img', { src: '../images/partners/partner-logos/novartis-logo.svg', id: 'existing-partners-logos-img', alt: '' })
              ),
              React.createElement(
                'td',
                { className: 'renewal' },
                ' ',
                React.createElement('img', { src: '../images/partners/contract-renewal.png', id: 'contract-renewal-img', alt: '' }),
                ' '
              ),
              React.createElement(
                'td',
                { className: 'contract' },
                ' ',
                React.createElement('img', { src: '../images/partners/contracts.png', id: 'contract-img', alt: '' }),
                ' '
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { className: 'logo' },
                ' ',
                React.createElement('img', { src: '../images/partners/partner-logos/amgen-logo.svg', id: 'existing-partners-logos-img', alt: '' })
              ),
              React.createElement(
                'td',
                { className: 'renewal' },
                ' ',
                React.createElement('img', { src: '../images/partners/contract-renewal.png', id: 'contract-renewal-img', alt: '' }),
                ' '
              ),
              React.createElement(
                'td',
                { className: 'contract' },
                ' ',
                React.createElement('img', { src: '../images/partners/contracts.png', id: 'contract-img', alt: '' }),
                ' '
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { className: 'logo' },
                ' ',
                React.createElement('img', { src: '../images/partners/partner-logos/pfizer-logo.svg', id: 'existing-partners-logos-img', alt: '' })
              ),
              React.createElement(
                'td',
                { className: 'renewal' },
                ' ',
                React.createElement('img', { src: '../images/partners/contract-renewal.png', id: 'contract-renewal-img', alt: '' }),
                ' '
              ),
              React.createElement(
                'td',
                { className: 'contract' },
                ' ',
                React.createElement('img', { src: '../images/partners/contracts.png', id: 'contract-img', alt: '' }),
                ' '
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { id: 'add-a-new-one-header' },
        React.createElement('img', { src: '../images/partners/partner-addition.png', alt: 'partner-addition', id: 'partner-addition-img' }),
        React.createElement(
          'h2',
          { id: 'add-a-new-partner-title' },
          ' ADD A NEW PARTNER '
        )
      )
    );
  }
};
export { Insurers as default };