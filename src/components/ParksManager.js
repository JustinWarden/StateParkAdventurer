const remoteURL = "http://localhost:1982";
//fetch calls for all parks

export default {
  getOne(id) {
    return fetch(`${remoteURL}/parks/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/parks`).then(result => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/parks/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  post(newParks) {
    return fetch(`${remoteURL}/parks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newParks)
    }).then(data => data.json());
  },
  update(editedPark) {
    return fetch(`${remoteURL}/parks/${editedPark.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPark)
    }).then(data => data.json());
  }
};