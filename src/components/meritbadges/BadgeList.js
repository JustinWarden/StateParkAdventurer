import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager';
import BadgeCard from './BadgeCard'

// import home from '../Home'

class BadgeList extends Component {

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