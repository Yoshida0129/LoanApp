import React, {Component} from 'react';
import '../assets/style/home.scss';
import moment from 'moment';

import InputForm from '../components/form';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  add = (item, borrow) => {
    console.log(item);
    if(borrow){
      console.log(item);

    }

  };

  date = () => {
    let time = new moment();
    return time.format('YYYY-MM-DD')
  };

  render(){
    return(
      <div id="home-body">
        <InputForm
          add={(item, borrow) => this.add(item, borrow)}
          date={this.date()}
        />
      </div>
    )
  }
}
