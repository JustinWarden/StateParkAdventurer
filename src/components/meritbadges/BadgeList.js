import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager';
import BadgeCard from './BadgeCard'


class BadgeList extends Component {

  //set the state for the selected parks to load
  state = {
    parks: []
  };

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

    //this will populate the merit badge field with selected parks visited
    return (
      <>
<h1>YOUR MERIT BADGES</h1>

 <div className="container-cards">
 {this.state.parks.map(singlePark => (
   <BadgeCard key={singlePark.id} parkProp={singlePark} />
 ))}
</div>
</>
    );
  }

}

export default BadgeList;