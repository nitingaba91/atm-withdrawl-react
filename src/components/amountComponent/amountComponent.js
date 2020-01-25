
// /client/App.js
import React, { Component } from 'react';

class AmountComponent extends Component {

  constructor(props) {
    super();
  }

  

  render() {
    let temp = <form autoComplete="off" onSubmit={this.props.submitStep3}>
      <fieldset>
        <legend>Enter Amount</legend>
      </fieldset>
      <div className="inner-form">
        <div className="input-field first-wrap">
          <input id="search" onChange={this.props.amountChange} type="text" value={this.props.stateValue.amount} placeholder="Enter Amount" />
          <span className="error">{this.props.stateValue.error}</span>
        </div>
        <div className="input-field third-wrap">
          <button className="btn-search" type="submit">Submit</button>
        </div>
      </div>
    </form>
    return (
      <React.Fragment>
        {temp}
      </React.Fragment>
    );
  }
}

export default AmountComponent;
