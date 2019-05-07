import React, {Component} from 'react';

export default class InputForm extends Component {
  error = null;
  constructor(props) {
    super(props);
    this.state = {date: this.props.date, name: null, price: null}
  }

  _onSubmit = (borrow) => {
    if(!this.state.name || !this.state.price){
      this.error = '未入力';
      return
    }
    const input_price = Number(this.state.price);
    if(!input_price){
      this.error = '半角数字で入力してください';
      return
    }
    if(input_price < 1){
      this.error = '正常な数値を入力してください'
    }
    this.setState({price: input_price});
    this.error = null;
    this.props._add(this.state, borrow);
  };

  render() {
    return (
      <article>
        <p>{this.state.error}</p>
        <input
          type="text"
          name="who"
          value={this.state.name}
          maxLength="10"
          onChange={(name) => this.setState({name: name.target.value})}
        />
        <input
          type="tel"
          name="price"
          maxLength="10"
          value={this.state.price}
          onChange={(price) => this.setState({price: price.target.value})}
        />
        <input
          type="date"
          name="when"
          value={this.state.date}
          onChange={(date) => this.setState({date: date.target.value})}
        />
        <input
          type="submit"
          name="borrow"
          value="借りた"
          onClick={() => this._onSubmit(true)}
        />
        <input
          type="submit"
          name="lend"
          value="貸した"
          onClick={() => this._onSubmit(false)}
        />
      </article>
    )
  }
}
