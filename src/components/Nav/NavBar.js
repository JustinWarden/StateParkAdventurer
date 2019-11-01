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
          <h2>Adventure is out there. Go and find it!</h2>

        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {!auth0Client.isAuthenticated() ? (
              <button className="btn btn-success" onClick={auth0Client.signIn}>Sign In</button>
        ) : (
            <React.Fragment>

              <li><Link className="nav-link" to="/home">Add a Park</Link></li>
              <li><Link className="nav-link" to="/meritbadges">Merit Badges</Link></li>
              <li><Link className="nav-link"to="/history">Park History</Link></li>
              <li><Link className="nav-link"to="/ranking">Adventurer Ranking</Link></li>
              <button
                className="btn btn-danger"
                onClick={this.signOut}
              >
                Sign Out
              </button>

              {/* <label>
                {auth0Client.getProfile().name}
              </label> */}

             </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);