import React, { Component } from 'react';
import {Appbar} from 'muicss/react';

import './css/MAppbar.css';

class MAppbar extends Component {
  render() {



    return (
      <Appbar>
       <table id="appbar-box" width="100%">
         <tbody>
           <tr id="appbar-box-row">
             <td className="mui--appbar-height">A</td>
             <td className="mui--appbar-height" id="appbar-box-row-op2">B</td>
             <td className="mui--appbar-height" id="appbar-box-row-op3">
              <i className="material-icons md-36">help</i>
             </td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}

export default MAppbar;
