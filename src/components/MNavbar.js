import React, { Component } from 'react';
import {Appbar} from 'muicss/react';

import './css/MNavbar.css';

class MNavbar extends Component {
  render() {



    return (
      <Appbar id="navbar" className="mui--color-red-A400 mui--bg-color-grey-50 mui--z2">
       <table id="navbar-box" width="100%">
         <tbody>
           <tr id="navbar-box-row">
             <td className="mui--appbar-height navbar-box-row-op-middle">
              <i className="material-icons md-24 ">help</i>
             </td>
             <td className="mui--appbar-height navbar-box-row-op-middle">
              <i className="material-icons md-24 ">help</i>
             </td>
             <td className="mui--appbar-height navbar-box-row-op-middle">
              <i className="material-icons md-24">help</i>
             </td>
             <td className="mui--appbar-height navbar-box-row-op-middle">
              <i className="material-icons md-24">help</i>
             </td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}

export default MNavbar;
