import React, { Component } from 'react';

class BadgeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('../images/Babcock.jpg')} alt="Fern" />
          </picture>
          <picture>
            <img src={require('../images/Audra.jpg')} alt="Fern" />
          </picture>
        </div>
      </div>
    );
  }
}

export default BadgeCard;