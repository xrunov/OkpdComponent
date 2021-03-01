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
            <td>Ц</td>
            <td>П</td>
            <td>С</td>
            <td>Н</td>
          </tr>
          <tr align="center">
            <td> руб</td>
            <td> дней</td>
            <td> %</td>
            <td> руб</td>
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