import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../store/actions'

const AdditionalFeature = props => {

  const addFeature = (e) => {
    e.preventDefault();
    console.log(props.feature)
    props.addFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, {addFeature})(AdditionalFeature);
