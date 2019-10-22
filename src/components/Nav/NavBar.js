import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../authentication/Auth";
import './NavBar.css'

class NavBar extends Component {
 signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear()
    this.props.history.replace("/");
  };

  render(){

    return (
      <header>
        <h1 className="site-title">WEST VIRGINIA <br />
          <small>STATE PARK ADVENTURER</small>
          </h1>
          <h4>Adventure is out there. Go and find it!</h4>

        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {!auth0Client.isAuthenticated() ? (
              <button className="btn btn-success" onClick={auth0Client.signIn}>Sign In</button>
        ) : (
            <React.Fragment>
             <label>
                {auth0Client.getProfile().name}
              </label>
              <button
                className="btn btn-danger"
                onClick={this.signOut}
              >
                Sign Out
              </button>
              <li><Link className="nav-link" to="/home">Add a Park</Link></li>
              <li><Link className="nav-link" to="/meritbadges">Merit Badges</Link></li>
              <li><Link className="nav-link"to="/history">Park History</Link></li>
             </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);