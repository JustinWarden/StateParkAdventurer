import React, { Component } from "react";
import { Link } from "react-router-dom";


class BadgeCard extends Component {
  render() {
    return (
      //this creates the merit badge card
      
      <div className="card">
        <div className="card-content">
          <div class ="park-image">
          <picture>
            <img src={(this.props.parkProp.park.imageURL)} alt="State Park Merit Badge" />
          </picture>
          </div>
          <h3>
            <span className="card-parkname">{this.props.parkProp.park.name}</span>
          </h3>
            <Link to={`/meritbadges/details/${this.props.parkProp.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BadgeCard;