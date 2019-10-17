import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager';
import '../Parks.css'

class DetailCard extends Component {

    state = {
        name: "",
        imageURL: "",
        description: "",
        notes: "",

    }

    handleDelete = () => {
        console.log("this is props", this.props)
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        // this.setState({loadingStatus: true})
        VisitedParksManager.delete(this.props.parkId)
        .then(() => this.props.history.push("/meritbadges"))
    }

    componentDidMount(){
        console.log("ParkDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        VisitedParksManager.getOne(this.props.parkId)
        .then((park) => {
            this.setState({
                name: park.name,
                image: park.imageURL,
                description: park.description,
                notes: park.notes

            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: {this.props.name}</h3>
            <p>Description:</p>
            <p>Notes: {this.state.notes}</p>
            <button type="button"onClick={this.handleDelete}>Remove Park</button>
          </div>
        </div>
      );
    }
}

export default DetailCard;