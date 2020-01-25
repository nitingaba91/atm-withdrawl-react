import React, { Component } from "react";
import EnterPin from "../enterPin/enterPin";
import AccountType from "../accountType/accountType";
import AmountComponent from "../amountComponent/amountComponent";
import AtmWithdrawl from "../AtmWithdrawl/AtmWithdrawl";
import './home.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: '',
      amount: 1000,
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      selectedDenomination: 0,
      arry: [],
      validDenomination: [2000, 500, 200, 100, 50, 20, 10]
    };
    this.valueChange = this.valueChange.bind(this);
    this.submitFirstStep = this.submitFirstStep.bind(this);
    this.submitSecondStep = this.submitSecondStep.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
    this.submitStep3 = this.submitStep3.bind(this);
    // this.selectedDenominationFunc = this.selectedDenominationFunc.bind(this);
  }

  valueChange(e) {
    var value = e.target.value;
    this.setState({
      value
    });
  }

  checkAmount(e) {
    var amount = parseInt(e.target.value);
    if(!amount) {
      amount= '';
    }
    this.setState({
      amount
    });
  }

  submitFirstStep(e) {
    e.preventDefault();

    var value = this.state.value;
    if (isNaN(value)) {
      this.setState({
        error: 'Please enter a number',
        showError: true
      })
      return;
    }
    if (!value || (value && value.length < 4)) {
      this.setState({
        error: 'Please enter Atleast 4 digit pin',
        showError: true
      })
    } else if (value) {
      this.setState({
        error: '',
        showError: false,
        step1: false,
        step2: true
      });
    }
  }

  submitSecondStep(e) {
    e.preventDefault();
    this.setState({
      step2: false,
      step3: true
    })
  }

  submitStep3(e) {
    e.preventDefault();
    this.setState({
      error: '',
      showError: false
    });

    if (!this.state.amount || this.state.amount == 0) {
      this.setState({
        error: 'Please enter a value',
        showError: true
      })
      return;
    }
    if (isNaN(this.state.amount)) {
      this.setState({
        error: 'Please enter a number',
        showError: true
      })
      return;
    }
    if (this.state.amount > 10000) {
      this.setState({
        error: 'Amount Should be less than 10000',
        showError: true
      })
    } else {
      if (this.state.amount % 10 !== 0) {
        this.setState({
          error: 'Please enter Amount in multiple of 10',
          showError: true
        })
        return;
      }
      this.setState({
        step3: false,
        step4: true
      });
    }
  }

  selectedDenominationFunc(value) {
    this.setState({
      selectedDenomination: parseInt(value)
    })
  }

  priceCalculation() {
    var resultArray = [];
    var total = this.state.amount;
    if (this.state.selectedDenomination) {
      var note = Math.floor(total / this.state.selectedDenomination);
      if (note) {
        resultArray.push({ totalNote: note, currency: this.state.selectedDenomination })
      }
      total = total % this.state.selectedDenomination;
    }
    if (total) {
      this.state.validDenomination.map(note => {
        if (Math.floor(total / note)) {
          resultArray.push({ totalNote: Math.floor(total / note), currency: note });
        }
        total = total % note;
      });
    }
    this.setState({
      arry: [...resultArray],
      step4: false,
      step5: true
    });
  }


  render() {
    let template = '';
    if (this.state.step1) {
      template = <div className="atm-app"><EnterPin stateValue={this.state} change={this.valueChange} submit={this.submitFirstStep}></EnterPin></div>;
    }
    else if (this.state.step2) {
      template = <div className="atm-app flex-direction-column"><AccountType submitSecondStep={this.submitSecondStep} ></AccountType></div>;
    }
    else if (this.state.step3) {
      template = <div className="atm-app"><AmountComponent amountChange={this.checkAmount} stateValue={this.state} submitStep3={this.submitStep3}></AmountComponent></div>;
    } 
    else if (this.state.step4) {
      let selectedDenominationTemplate = '';
      if (this.state.selectedDenomination) {
        selectedDenominationTemplate = <h3 className="white">You have selected denomination of {this.state.selectedDenomination}</h3>
      }
    template = <div className="atm-app flex-direction-column white"><h3>Amount Entered: {this.state.amount} </h3><h3>Please select denomination (optional)</h3>
        {selectedDenominationTemplate}
        <div>
          {
            this.state.validDenomination.map((item, index) => (
              <button key={index} className={'mt-3 custom-width btn btn-primary ' + (this.state.selectedDenomination == item ? 'selected' : '')} onClick={() => this.selectedDenominationFunc(item)}>{item}<br /></button>
            ))
          }
        </div>
        <div>
          <button type="button" className="mt-3 custom-width btn btn-secondary" onClick={() => this.priceCalculation()}>Submit</button>
        </div>
      </div>

      //demoniation selection
    }
    else if (this.state.step5) {
      template = <AtmWithdrawl notesValue={this.state.arry}></AtmWithdrawl>
     }
    return (
      <React.Fragment>
        {template}
      </React.Fragment>
    );
  }
}

export default Home;
