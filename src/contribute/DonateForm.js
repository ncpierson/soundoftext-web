import React, { Component } from 'react';

class DonateForm extends Component {
  constructor() {
    super();

    this.state = {
      amount: 5
    }

    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleAmountChange(amount) {
    this.setState({ amount: amount });
  }

  render() {
    const amount = this.state.amount;

    return (
      <div>
        <form>
          <div className="amounts">
            <Amount amount="5" onClick={this.handleAmountChange} />
            <Amount amount="10" onClick={this.handleAmountChange} />
            <Amount amount="25" onClick={this.handleAmountChange} />
            <CustomAmount amount={amount} onChange={this.handleAmountChange} />
          </div>
          <button className="donate">Donate</button>
        </form>
      </div>
    );
  }
}

class Amount extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(this.props.amount);
  }

  render() {
    const amount= this.props.amount;

    return (
      <button
        className="amount"
        onClick={this.handleClick}
      >${amount}</button>
    );
  }
}

class CustomAmount extends Component {
  constructor() {
    super();

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    e.preventDefault();

    this.props.onChange(e.target.value);
  }

  render() {
    const amount = this.props.amount;

    return (
      <div className="amount amount--custom">
        <span className="amount__currency">$</span>
        <input
          value={amount} onChange={this.handleTextChange} type="number"
          step="0.01" min="0" max="1000.00" placeholder="Custom amount..."
          required
        />
      </div>
    );
  }
}

export default DonateForm;
