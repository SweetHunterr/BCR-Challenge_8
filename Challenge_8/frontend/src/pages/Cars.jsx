import React, { Component } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import SearchBox from '../components/Search-Box';
import { connect } from 'react-redux'

class Cars extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchBox />
        <div className='row' id='cars-container'>
          {this.props.allcars.map((item) =>
            <div className='listCars'>
              <Card
                image={item.image}
                manufacture={item.manufacture}
                model={item.model}
                rentPerDay={item.rentPerDay}
                description={item.description}
                capacity={item.capacity}
                transmission={item.transmission}
                year={item.year}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allcars: state.dataCars
  }
}

export default connect(mapStateToProps)(Cars);
