import React, { Component } from 'react'
import RankingManager from './RankingManager'
import './Parks.css'

class RankingCard extends Component {

    state = {
        userName: [],
        parksVisited: [],
      };

      componentDidMount() {
        console.log("PARK LIST: ComponentDidMount");
        //getAll from visitedparksManager and hang on to that data; put it in state
        RankingManager.getAll().then(usersFromDatabase => {
          console.log(usersFromDatabase)
          this.setState({
            userName: usersFromDatabase,
        parksVisited: usersFromDatabase

          })
        })
    };


  render() {
    return (
        <>
        <h1>Your ranking</h1>
  <div className="username-card">
         <h2>Name:</h2>
         <br></br>
         {this.state.userName.map((singleUser)=>{
return singleUser.name
         })}

    
        </div>
</>
)}

}


export default RankingCard