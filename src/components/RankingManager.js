const remoteURL = "http://localhost:1982";

export default {

  getAll() {
    return fetch(`${remoteURL}/users?_embed=visitedParks`)
    .then(result => result.json());
    },
    
};