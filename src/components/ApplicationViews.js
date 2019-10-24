import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import BadgeList from './meritbadges/BadgeList'
import HistoryCard from './history/HistoryCard'
import Callback from './authentication/Callback'
import DetailCard from './meritbadges/DetailCard'
import RankingCard from './Ranking/RankingCard'
// import Auth0Client from "./authentication/Auth";

class ApplicationViews extends Component {

  render() {
    return (

      <React.Fragment>

<Route
path= "/home" render={(props)=> {
  return <Home {...props}/>
}}
   />
        <Route exact path="/meritbadges" render={(props) => {
          return <BadgeList {...props}/>
        }} />
         <Route path="/meritbadges/details/:parkId(\d+)" render={(props) => {
          return <DetailCard {...props}/>
        }} />
        <Route path="/history" render={(props) => {
          return <HistoryCard {...props} />
        }} />
        <Route path="/ranking" render={(props) => {
          return <RankingCard {...props} />
        }} />
        <Route exact path="/callback" component={Callback} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews