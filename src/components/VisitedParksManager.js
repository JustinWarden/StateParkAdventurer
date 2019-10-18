const remoteURL = "http://localhost:1982";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/visitedParks/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/visitedParks?_expand=park&userId=${sessionStorage.getItem('credentials')}`).then(result => result.json());
    },

  delete(id) {
    return fetch(`${remoteURL}/visitedParks`, {
      method: "DELETE"
    }).then(result => result.json());
  },

  post(newVisitedParks) {
    return fetch(`${remoteURL}/visitedParks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newVisitedParks)
    }).then(data => data.json());
  },

  update(editedVisitedPark) {
    return fetch(`${remoteURL}/visitedParks/${editedVisitedPark.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedVisitedPark)
    }).then(data => data.json());
  }
};