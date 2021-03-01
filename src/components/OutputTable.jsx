import '../OkpdStyle.sass';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class OutputTable extends Component {

  render() {
    if (this.props.tExists) {
      return (
        <table className="outputTable" border="1px" cellSpacing="0">
          <tbody>
          <tr align="center">
            <td>plaseholderData</td>
            <td>plaseholderData</td>
            <td>plaseholderData</td>
            <td>plaseholderData</td>
          </tr>
          <tr align="center">
            <td> plaseholderData</td>
            <td> plaseholderData</td>
            <td> plaseholderData</td>
            <td> plaseholderData</td>
          </tr>
          </tbody>
        </table>
      );
    } else {
      return (
        <div> </div>
      );
    }
  }
};