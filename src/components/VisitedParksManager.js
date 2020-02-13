const remoteURL = "http://localhost:1982";

// CRUD functions
export default {
  getOne(id) {
    return fetch(`${remoteURL}/visitedParks/${id}/?_expand=park`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/visitedParks?_expand=park&userId=${sessionStorage.getItem('credentials')}`).then(result => result.json());
    },

  delete(id) {
    return fetch(`${remoteURL}/visitedParks/${id}`, {
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

  update(editedNote) {
    return fetch(`${remoteURL}/visitedParks/${editedNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedNote)
    }).then(data => data.json());
  }
};