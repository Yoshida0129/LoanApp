import React, {Component} from 'react';
import '../assets/style/home.scss';
import moment from 'moment';

import InputForm from '../components/form';
import OutputList from '../components/list';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      borrow: [],
      lend: []
    }
  }

  _add = (item, borrow) => {
    this.setState(
    borrow ?
      {borrow: [...this.state.borrow, item]} :
      {lend: [...this.state.lend, item]}
    );
  };

  _date = () => {
    let time = new moment();
    return time.format('YYYY-MM-DD')
  };
  componentDidMount(){
    this.setState({
      borrow: localStorage.getItem('borrow'),
      lend: localStorage.getItem('lend')
    });
  }
  componentWillUpdate(){
    localStorage.setItem('borrow', this.state.borrow);
    localStorage.setItem('lend', this.state.lend);
  }

  render(){
    return(
      <div id="home-body">
        <InputForm
          _add={(item, borrow) => this._add(item, borrow)}
          date={this._date()}
        />
        <OutputList
          list={this.state.borrow ? this.state.borrow : [1,2]}
          borrow={true}
        />
        <OutputList
          list={this.state.lend ? this.state.borrow : [1,2]}
          borrow={false}
        />
      </div>
    )
  }
}
