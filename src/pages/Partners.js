import React from 'react';
import '../styles/partners.css';

export default class Insurers extends React.Component {
  render() {
    return (
      <div id="partners-tab">
      <div id="existing-partners-header">
      <img src="../images/partners/existing-partners.png" alt="existing-partners" id="existing-partners-img"/>
      <h1 id="existing-partners-title"> PARTNERS </h1>
      </div>

      <div id="existing-partners-table">
      <table>
      <tbody>
      <tr>
      <td className="logo"> <img src="../images/partners/partner-logos/novartis-logo.svg" id="existing-partners-logos-img" alt=""/></td>
      <td className="renewal"> <img src="../images/partners/contract-renewal.png" id="contract-renewal-img" alt=""/> </td>
      <td className="contract"> <img src="../images/partners/contracts.png" id="contract-img" alt=""/> </td>
      </tr>

      <tr>
      <td className="logo"> <img src="../images/partners/partner-logos/amgen-logo.svg" id="existing-partners-logos-img" alt=""/></td>
      <td className="renewal"> <img src="../images/partners/contract-renewal.png" id="contract-renewal-img" alt=""/> </td>
      <td className="contract"> <img src="../images/partners/contracts.png" id="contract-img" alt=""/> </td>
      </tr>

      <tr>
      <td className="logo"> <img src="../images/partners/partner-logos/pfizer-logo.svg" id="existing-partners-logos-img" alt=""/></td>
      <td className="renewal"> <img src="../images/partners/contract-renewal.png" id="contract-renewal-img" alt=""/> </td>
      <td className="contract"> <img src="../images/partners/contracts.png" id="contract-img" alt=""/> </td>
      </tr>

      </tbody>
      </table>
      </div>

      <div id="add-a-new-one-header">
      <img src="../images/partners/partner-addition.png" alt="partner-addition" id="partner-addition-img"/>
      <h2 id="add-a-new-partner-title"> ADD A NEW PARTNER </h2>
      </div>

      </div>
    );
  }
}
