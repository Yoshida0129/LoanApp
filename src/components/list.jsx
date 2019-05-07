import React from 'react';

export const OutputList = (props) => {
  return (
    <section>
      <h2>{props.borrow ? '借りたものリスト' : '貸した物リスト'}</h2>
      <ul>
        {
          props.list.map((val, index) => (
            <li key={index}>{ val.name }</li>
          ))
        }
      </ul>
    </section>
  )
};

export default OutputList;
