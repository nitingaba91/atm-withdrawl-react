
// /client/App.js
import React, { Component } from 'react';

class AccountType extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="white">Select type of account</h3>
        <button type="button" onClick={this.props.submitSecondStep} className="mb-4 mt-4 btn btn-primary">Saving</button>
        <button type="button" className="btn btn-secondary" onClick={this.props.submitSecondStep}>Current</button>
      </React.Fragment>
    );
  }
}

export default AccountType;
