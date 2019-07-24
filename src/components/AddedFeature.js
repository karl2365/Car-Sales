import React from 'react';
import {removeFeature} from '../store/actions';
import {connect} from 'react-redux';

const AddedFeature = props => {


  const removeFeature = (e) => {
    e.preventDefault();
    console.log(props.feature)
    props.removeFeature(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button  onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
