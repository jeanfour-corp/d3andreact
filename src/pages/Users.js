import React from 'react';
import '../styles/styles.css';

export default class Users extends React.Component {

  render() {
    return (
      <div>
<table  id="customers">
  <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Position</th>
    <th>User Role</th>
    <th>Last Login</th>
  </tr>
  <tr>
    <td>Daniel</td>
    <td>Bernoulli</td>
    <td>Lead</td>
    <td>Administrator</td>
    <td>Fri Jan 25 2019 15:37 GMT +0100 (CEST)</td>
  </tr>
  <tr>
    <td>Roger</td>
    <td>Federer</td>
    <td>Associate</td>
    <td>Basic User Level Access</td>
    <td>Mon Jan 21 2019 17:45 GMT +0100 (CEST)</td>
  </tr>
  <tr>
    <td>Leonhard</td>
    <td>Euler</td>
    <td>Associate</td>
    <td>Basic User Level Access</td>
    <td>Thur Jan 24 2019 17:54 GMT +0100 (CEST)</td>
  </tr>
  <tr>
    <td>Stephan</td>
    <td>Lichtsteiner</td>
    <td>Associate</td>
    <td>Basic User Level Access</td>
    <td>Wed Jan 23 2019 11:29 GMT +0100 (CEST)</td>
  </tr>
  <tr>
    <td>Clive</td>
    <td>Bucher</td>
    <td>Associate</td>
    <td>Basic User Level Access</td>
    <td>Mon Jan 21 2019 17:45 GMT +0100 (CEST)</td>
  </tr>
  <tr>
    <td>Andreas</td>
    <td>Meyer</td>
    <td>Associate</td>
    <td>Basic User Level Access</td>
    <td>Tues Jan 22 2019 16:50 GMT +0100 (CEST)</td>
  </tr>
</table>
      <div style={{float: 'right'}}>
<button >
  Add New User
</button>
      </div>
      </div>
    );
  }
}
