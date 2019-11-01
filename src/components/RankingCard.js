import React, { Component } from 'react'
import RankingManager from './RankingManager'
import './Parks.css'

class RankingCard extends Component {

    state = {

        userName: [],
        parksVisited: [],

    }

    componentDidMount() {
        console.log("PARK LIST: ComponentDidMount");
//getAll from visitedparksManager and hang on to that data; put it in state

        RankingManager.getAll().then(usersFromDatabase => {
//sort the visited parks and rank the users
            usersFromDatabase.sort((a, b) => b.visitedParks.length - a.visitedParks.length);

            console.log(usersFromDatabase)
            this.setState({
                userName: usersFromDatabase,
                parksVisited: usersFromDatabase,

            })

        })
    }
//ranking card for user name and amount of parks visited
    render() {
        return (
            <>
                <h1>ADVENTURER RANKING</h1>
                <div className="username-card">
                    <br></br>
                    <h2>{this.state.userName.map((singleUser,) => {
                        return <p>Name:{" "}{singleUser.name}<br></br> Parks Visited:{" "}{singleUser.visitedParks.length}</p>
                    })}</h2>

                </div>
            </>
        )
    }

}


export default RankingCard