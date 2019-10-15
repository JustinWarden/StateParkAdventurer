import React, { Component } from 'react'
import ParksManager from './ParksManager'

class Home extends Component {
    //define what this component needs to render
    state = {
      parks: []
    };

    componentDidMount() {
      console.log("PARK LIST: ComponentDidMount");
      //getAll from AnimalManager and hang on to that data; put it in state
      ParksManager.getAll().then(parksFromDatabase => {
        console.log(parksFromDatabase);
        this.setState({
          parks: parksFromDatabase
        });
      });
    }

    render() {
      console.log("PARK LIST: Render");
    return (

     <h1>ADD A STATE PARK VISITED</h1>

//        <select>
// {this.state.parks.map (singlePark =>
//          <option>

//          <option/>
//        <select/>
//      <input type="submit" value="Submit" />

    )
  }

}
export default Home