import React from 'react';
import {Link} from 'react-router-dom';

export default class Mainlayout extends React.Component {
  render() {
    return (
      <div className="top-container">

      <div id="user-header">
        <img src="../images/partners/partner-logos/amgen-logo.svg" alt="user-logo" id="user-logo"/>
      </div>
        <div id="user-header-strip"></div>

    <div id="dashboard">

      <div id="main-menu">
      <Link to="/home"><img src="../images/main-menu/home-min.png" id="image-props" alt="home"/><span> HOME  </span></Link>
      <Link to="/outcomes"><img src="../images/main-menu/clinical-endpoints.png" id="image-props" alt="outcomes"/><span> OUTCOMES  </span></Link>
      <Link to="/dataintegration"><img src="../images/main-menu/data-integration.png" id="image-props" alt="dataint"/><span> DATA SOURCES </span></Link>
      <Link to="/partners"><img src="../images/main-menu/partners.png" id="image-props" alt="partners"/><span> CONTRACTS </span></Link>
      <Link to="/outcometransactions"><img src="../images/main-menu/outcome-based-transactions.png" id="image-props" alt="outcome-transactions"/><span> PAYMENTS </span></Link>
      <Link to="/users"><img src="../images/main-menu/users.png" id="image-props" alt="outcomes"/><span> USERS  </span></Link>
      <Link to="/support"><img src="../images/main-menu/support.png" id="image-props" alt="outcomes"/><span> SUPPORT  </span></Link>
      </div>

      <div id="info-box">
      <div style={{float: 'right'}}>
<button >
  Logout
</button>
      </div>

      <table id="info-box-table">
      <tbody>
      <tr><td> <img src="../images/info-box/info-box-periodicity.png" alt="info-box" id="info-box-img"/></td>
      <td><span className="info-box-text"> PERIODICITY: 4 months </span></td></tr>
      <tr><td> <img src="../images/info-box/info-box-field-oncology.png" alt="info-box" id="info-box-img"/></td>
      <td><span className="info-box-text">  ONCOLOGY: polycythemia vera </span></td></tr>
      <tr><td> <img src="../images/info-box/info-box-outcomes-tracked.png" alt="info-box" id="info-box-img"/></td>
      <td><span className="info-box-text">  OUTCOMES TRACKED: hematocrit, activity, quality of sleep  </span></td></tr>
      <tr><td> <img src="../images/info-box/info-box-outcomes-baseline.png" alt="info-box" id="info-box-img"/></td>
      <td><span className="info-box-text">  OUTCOMES BASELINE </span></td></tr>
      </tbody>
      </table>
      </div>

      <div id="main">
      {this.props.children}
    </div>
    </div>
    </div>
    );
  }
}
