import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  render() {
    return (
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              {/* <Link to={`/cars/${car.id}`} key={car.id} /> */}
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    cars: state.cars,
    garage: state.garage
  }
}

export default connect(mapStateToProps)(CarsIndex);