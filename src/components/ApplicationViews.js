import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import BadgeCard from './meritbadges/BadgeCard'
import HistoryCard from './history/HistoryCard'
import Callback from './authentication/Callback'
import DetailCard from './meritbadges/DetailCard'
// import Auth0Client from "./authentication/Auth";

class ApplicationViews extends Component {

  render() {
    return (

      <React.Fragment>

<Route
path= "/home" render={(props)=> {
  return <Home {...props}/>
}}
    // exact
    // path="/home"
    // render={(props) => {
    //   if (Auth0Client.isAuthenticated()) {
    //     return <Home {...props} Home={this.state.Home} />;
      // } else {
      //   Auth0Client.signIn();
      //   return null;
      // }
  //   }}
   />
        <Route path="/meritbadges" render={(props) => {
          return <BadgeCard {...props}/>
        }} />
         <Route path="/meritbadges/details" render={(props) => {
          return <DetailCard {...props}/>
        }} />
        <Route path="/history" render={(props) => {
          return <HistoryCard />
        }} />
        <Route exact path="/callback" component={Callback} />

        <Route path="/meritbadges/new" render={(props) => {
          return <BadgeCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews