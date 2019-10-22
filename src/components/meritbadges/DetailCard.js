import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager';
import '../Parks.css'


class DetailCard extends Component {

    state = {
        id: "",
        name: "",
        description: "",
        notes: "",
        image: ""

    }

    handleFieldChange = evt => {
      console.log("this is event.target.id", evt.target.id);
      console.log("this is event.target.value", evt.target.value);
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      console.log("this is state to change", stateToChange);
      this.setState(stateToChange);
    };

    handleDelete = () => {
        console.log("this is DELETE props", this.props)
        this.setState({loadingStatus: true})
        VisitedParksManager.delete(this.props.match.params.parkId)
        .then(() => this.props.history.push("/meritbadges"))
    };

    updateExistingNotes = evt => {
        evt.preventDefault();
        // this.setState({ loadingStatus: true });
        const editedNote = {
          id: this.props.match.params.parkId,
          notes: this.state.notes,
          userId: this.state.userId,
          parkId: this.state.parkId
        }
        VisitedParksManager.update(editedNote).then(() =>
        this.props.history.push("/meritbadges")
      );
    }


    componentDidMount(){
        console.log("ParkDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        VisitedParksManager.getOne(this.props.match.params.parkId)
        .then((park) => {
            console.log(park)
            this.setState({
                id: park.id,
                userId: park.userId,
                parkId: park.parkId,
                name: park.park.name,
                description: park.park.description,
                notes: park.notes,
                image: park.park.imageURL
            });
        });
        console.log("ParkDetail: ComponentDidMount");
    };

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h2>{this.state.name}</h2>
            <picture>
            <img src={this.state.imageURL} alt="State Park" />
          </picture>

            <h3>Description:</h3>
            {this.state.description}

            <h3>Notes:</h3>
           <p> {this.state.notes}</p>

            <textarea id="notes"
    onChange={this.handleFieldChange}
    >
    </textarea>

            <br></br>
            <button type="button"onClick= {this.updateExistingNotes}>Edit Notes
            </button>
            <br></br>
            <button type="button"onClick={this.handleDelete}>Remove Park</button>
          </div>
        </div>
      );
    }
}

export default DetailCard;