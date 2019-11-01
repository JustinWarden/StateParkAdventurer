import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager';
import BadgeCard from './BadgeCard'

// import home from '../Home'

class BadgeList extends Component {

  state = {
    parks: [],
    percent: "",
  };


  componentDidMount() {
    console.log("PARK LIST: ComponentDidMount");
    //getAll from parksManager and hang on to that data; put it in state
    VisitedParksManager.getAll().then(parksFromDatabase => {
      console.log(parksFromDatabase)

//calculate the percent of parks visited

      var result = parksFromDatabase.length

      var parkPercent = (result * 2.86).toFixed(0)

      console.log(parkPercent);

      this.setState({
              percent: parkPercent,
              parks: parksFromDatabase

      })
    })
    }

  render() {

    return (
      <>
<h1>YOUR MERIT BADGES</h1>

 <h2>You have visited {this.state.percent}% of the West Virginia State Parks</h2>

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