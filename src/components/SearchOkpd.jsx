import '../OkpdStyle.sass';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class SearchOkpd extends Component {

  constructor(props) {
    super(props);
    this.state = {SearchData: ""};
  }

  handleDateChange = (e) => {
    this.setState({
      SearchData: e.target.value
    });
    this.props.onDateReset(e.target.value);
  }

  render() {
    const {SearchData} = this.state
    return (
      <div className="search">
        <input
          type="text"
          className="form-control"
          value={SearchData}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
};