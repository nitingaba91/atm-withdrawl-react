
// /client/App.js
import React, { Component } from 'react';

class AtmWithdrawl extends Component {

  render() {
    console.log(this.props.notesValue)
    return (
      <React.Fragment>
        <div className="atm-app flex-direction-column">
          <h3 className="white">Atm Will dispense following notes as per Denomination selection</h3>
          {
            this.props.notesValue.map((item, index) => (
              <h6 className="white" key={index}>{item.currency}Rs note= {item.totalNote} no of notes</h6>
            ))

          }
        </div>
      </React.Fragment>
    );
  }
}

export default AtmWithdrawl;
