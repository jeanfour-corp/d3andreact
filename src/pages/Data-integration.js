import React from 'react';
import '../styles/data-integration.css';

export default class Dataintegration extends React.Component {
  render() {
    return (
          <div id="data-sources-tab">

          <div id="data-sources-header">
          <h1 id="data-sources-title"> DATA SOURCES </h1>
          </div>

          <div id="data-sources-in-transaction-header">
          <img src="../images/data-sources/data-source-data-sources-in-transaction.png" alt="data-sources" id="source-img"/>
          <h2 id="data-sources-title"> OUTCOME-CONTRACTED </h2>
          </div>

          <div id="source-example">
          <div id="source-header">
          <img src="../images/data-sources/data-source-claims.png" alt="data-sources" id="source-img"/>
          <h2 id="source-text"> CLAIMS </h2>
          </div>

          <table id="data-source-parameters-table">
          <tbody>
          <tr><td> <img src="../images/data-sources/data-source-patient-coverage.png" alt="data-sources" id="data-sources-img"/></td>
          <td><span className="data-sources-text"> Patient coverage: 100% </span></td></tr>
          <tr><td> <img src="../images/data-sources/data-source-validation.png" alt="data-sources" id="data-sources-img"/></td>
          <td><span className="data-sources-text">  Validation method: internal billing infrastructure </span></td></tr>
          <tr><td> <img src="../images/data-sources/data-source-outcomes-tracked.png" alt="data-sources" id="data-sources-img"/></td>
          <td><span className="data-sources-text">  Outcomes tracked: </span></td></tr>
          </tbody>
          </table>

          </div>

          <div id="data-sources-in-testing-header">
            <img src="../images/data-sources/data-source-data-sources-in-testing.png" alt="data-sources" id="source-img"/>
          <h2 id="data-sources-title"> TESTING PHASE </h2>
          </div>

          <div id="source-example">
          <div id="source-header">
          <img src="../images/data-sources/data-source-wearable.png" alt="data-sources" id="source-img"/>
          <h2 id="source-text"> EMFIT-SLEEP TRACKER</h2>
          </div>

          <table id="data-source-parameters-table">
          <tbody>
          <tr><td> <img src="../images/data-sources/data-source-patient-coverage.png" alt="data-sources" id="data-sources-img"/></td>
          <td><span className="data-sources-text"> Patient coverage:</span></td></tr>
          <tr><td> <img src="../images/data-sources/data-source-validation.png" alt="data-sources" id="data-sources-img"/></td>
          <td><span className="data-sources-text">  Validation method: baseline study, testing period</span></td></tr>
          <tr><td> <img src="../images/data-sources/data-source-outcomes-tracked.png" alt="data-sources" id="data-sources-img"/></td>
          <td><span className="data-sources-text">  Outcomes tracked: quality of sleep </span></td></tr>
          </tbody>
          </table>

          </div>
          </div>
    );
  }
}
