import React, { Component } from 'react'
import ParksManager from './ParksManager'
import VisitedParksManager from './VisitedParksManager'

class Home extends Component {
    //define what this component needs to render
    state = {
      notes: "",
      parks: [],
      userId: "",
      parkId: ""
    };

    handleFieldChange = evt => {
      console.log("this is event.target.id", evt.target.id);
      console.log("this is event.target.value", evt.target.value);
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      console.log("this is state to change", stateToChange);
      this.setState(stateToChange);
    };

    componentDidMount() {
      const userId = parseInt(sessionStorage.getItem("credentials"));
      console.log(userId);
      console.log("PARK LIST: ComponentDidMount");

      //getAll from parksManager and hang on to that data; put it in state

      ParksManager.getAll(userId).then(parksFromDatabase => {
        console.log(parksFromDatabase);
        this.setState({
          parks: parksFromDatabase
        });
      });
    }

    constructNewPark = evt => {
      evt.preventDefault();
      if (this.state.parkId === "" || this.state.notes === "") {
        window.alert("Please Select a Park and Enter Notes You Silly Rascal!!!");
      } else {
        const visitedParks = {
          name: this.state.name,
          notes: this.state.notes,
          userId: parseInt(sessionStorage.getItem("credentials")),
          parkId: +this.state.parkId,// convert to number

        };

    VisitedParksManager.post(visitedParks).then(() =>
          this.props.history.push("/meritbadges")

        );
      }
      console.log(this.props)
    };

    // this will show the park list select dropdown menu.  populated from json server
    render() {
      console.log("PARK LIST: Render");
    return (
<>
      <h1>Select State Park Visited</h1>
      <form>
      <select

                className="form-control"
                id="parkId"
                value={this.state.parkId}
                onChange={this.handleFieldChange}
              >
                {this.state.parks.map(park => (
                  <option key={park.id} value={park.id}>
                    {park.name}
                  </option>
                ))}
              </select>

{/* add notes to park selected  */}
    <br></br>
    <h2>NOTES</h2>
    <br></br>
    <textarea id="notes"
    onChange={this.handleFieldChange}
    >
    </textarea>
    <br></br>
{/* submit state park visited with notes */}
    <button
                type="button"
                onClick={this.constructNewPark}
              >
                Submit
              </button>
              </form>
</>
    )}
}
export default Home