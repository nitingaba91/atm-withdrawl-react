
// /client/App.js
import React, { Component } from 'react';

class EnterPin extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form autoComplete="off" onSubmit={this.props.submit}>
        <fieldset>
          <legend>Hi User, Please Enter Your Pin</legend>
        </fieldset>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <input id="search" onChange={this.props.change} type="text" placeholder="Enter Pin" />
            <span className="error">{this.props.stateValue.error}</span>
          </div>
          <div className="input-field third-wrap">
            <button className="btn-search" type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default EnterPin;
