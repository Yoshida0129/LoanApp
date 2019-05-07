import React, {Component} from 'react';
import '../assets/style/home.scss';
import moment from 'moment';

import InputForm from '../components/form';
import OutputList from '../components/list';

const store = require('store');

export default class Home extends Component {
  constructor(props){
    super(props);
    let borrow = store.get('borrow');
    let lend = store.get('lend');
    borrow = borrow ? borrow : [];
    lend = lend ? lend : [];
    this.state = {
      borrow: borrow ? borrow : [] ,
      lend: lend ? lend : []
    };
  }

  _add = async (item, borrow) => {
    await this.setState(
    borrow ?
      {borrow: [...this.state.borrow, item]} :
      {lend: [...this.state.lend, item]}
    );
    store.set('borrow', this.state.borrow);
    store.set('lend', this.state.lend);
    console.log(this.state)
  };

  _date = () => {
    let time = new moment();
    return time.format('YYYY-MM-DD')
  };

  render(){
    return(
      <div id="home-body">
        <InputForm
          _add={(item, borrow) => this._add(item, borrow)}
          date={this._date()}
        />
        <OutputList
          list={this.state.borrow ? this.state.borrow : [{name: ''}]}
          borrow={true}
        />
        <OutputList
          list={this.state.lend ? this.state.lend : [{name: ''}]}
          borrow={false}
        />
      </div>
    )
  }
}
