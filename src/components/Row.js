import React from 'react';

const Row = props => (
  <div className="row">
    <label>{props.label}</label>
    {props.children}
  </div>
);

export default Row;
