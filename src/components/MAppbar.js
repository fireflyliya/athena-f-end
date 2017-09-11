import React, { Component } from 'react';
import {Appbar} from 'muicss/react';

import './css/MAppbar.css';

class MAppbar extends Component {
  render() {



    return (
      <div>
      <Appbar id="appbar" className="mui--bg-color-red-A400 mui--z2">
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
      <div className="mui--appbar-height" style={{border: "1px solid #aaa"}}></div>
      </div>
    );
  }
}

export default MAppbar;
