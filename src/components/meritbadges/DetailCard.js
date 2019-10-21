import React, { Component } from 'react';
import VisitedParksManager from '../VisitedParksManager';
import '../Parks.css'
// import ParksManager from '../ParksManager';

class DetailCard extends Component {

    state = {
        id: "",
        name: "",
        description: "",
        notes: "",

    }

    handleDelete = () => {
        console.log("this is DELETE props", this.props)
        VisitedParksManager.delete(this.props.parkId)
        .then(() => this.props.history.push("/meritbadges"))
    };

//     updateExistingNotes = evt => {
//         evt.preventDefault();
//         this.setState({ loadingStatus: true });
//         const editedNote = {
//           id: this.props.match.params.userId,
//           notes: this.state.notes,
//         }
//     }

//     VisitedParksManager.update(editedNote).then(() =>
//     this.props.history.push("/meritbadges")
//   );
// };

    componentDidMount(){
        console.log("ParkDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        VisitedParksManager.getOne(this.props.match.params.parkId)
        .then((park) => {
            console.log(park)
            this.setState({
                id: park.id,
                name: park.park.name,
                description: park.park.description,
                notes: park.notes
            });
        });
        console.log("ParkDetail: ComponentDidMount");
    };

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: {this.state.name}</h3>
            <p>Description:{this.state.description}</p>
            <p>Notes: {this.state.notes}</p>

            <button type="button"onClick={this.handleDelete}>Remove Park</button>
          </div>
        </div>
      );
    }
}

export default DetailCard;