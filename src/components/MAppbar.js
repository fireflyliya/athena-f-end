import React, { Component } from 'react';
import {Appbar} from 'muicss/react';

import './css/MAppbar.css';

class MAppbar extends Component {
  render() {



    return (
      <Appbar className="mui--bg-color-red-A400 mui--z2">
       <table id="appbar-box" width="100%">
         <tbody>
           <tr id="appbar-box-row">
             <td className="mui--appbar-height">
              <i className="material-icons md-24 ">menu</i>
             </td>
             <td className="mui--appbar-height" id="appbar-box-row-op2">athena</td>
             <td className="mui--appbar-height" id="appbar-box-row-op3">
              <i className="material-icons md-24">more_vert</i>
             </td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}

export default MAppbar;
