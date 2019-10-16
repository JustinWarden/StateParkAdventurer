import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager'
class BadgeCard extends Component {

  componentDidMount() {
    console.log("PARK LIST: ComponentDidMount");
    //getAll from parksManager and hang on to that data; put it in state
    VisitedParksManager.getAll().then(parksFromDatabase => {
      console.log(parksFromDatabase);
      this.setState({
        parks: parksFromDatabase
      });
    });
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
         <h1>YOUR MERIT BADGES</h1>
        </div>
      </div>
    );
  }
}

export default BadgeCard;