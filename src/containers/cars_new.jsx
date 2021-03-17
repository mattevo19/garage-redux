import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import { addCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  renderField = ({ input, placeholder, label, type, meta: { touched, error } }) => (
    <div className="form-group">
      <label>{label}</label>
        <input {...input} placeholder={placeholder} type={type} className="form-control"/>
        {touched && (error && <span className="red">{error}</span>)}
    </div>
  )

  required = (value) => value ? undefined : 'Required';
  
  render () {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container">
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

          <Field name="brand" type="text"
          label="Brand" placeholder="Aston Martin"
          component={this.renderField} 
          validate={[this.required]} />

          <Field name="model" type="text"
          label="Model" placeholder="DB Mark III" 
          component={this.renderField} 
          validate={[this.required]} />
         
          <Field name="owner" type="text" 
          label="Owner" placeholder="James Bond" 
          component={this.renderField} 
          validate={[this.required]} />
      
  
          <Field name="plate" type="text" 
          label="Plate" placeholder="DB Mark III" 
          component={this.renderField} 
          validate={[this.required]} />
  
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm'
})(
  connect(mapStateToProps, { addCar })(CarsNew)
);

