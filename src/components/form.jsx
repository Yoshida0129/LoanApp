import React, {Component} from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props, name:'', price: null}
  }

  _onSubmit = (borrow) => {
    if(!this.state.name || this.state.price){
      this.setState({error: 'バリデーションエラー'});
      return
    }
    this.state.add(this.state, borrow)
  }

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <label>誰に</label>
        <input
          type="text"
          name="who"
          value={this.state.name}
          onChange={(name) => this.setState({name: name.target.value})}
        />
        <label>金額</label>
        <input
          type="tel"
          name="price"
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
      </div>
    )
  }
}
