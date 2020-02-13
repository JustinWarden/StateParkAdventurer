const remoteURL = "http://localhost:1982";

// get the user by id and their selected parks visited to rank them
export default {

  getAll() {
    return fetch(`${remoteURL}/users?_embed=visitedParks`)
    .then(result => result.json());
    },

};