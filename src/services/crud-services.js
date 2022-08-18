import axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
const URI = "/users"

function getUsersFromApi() {
  return axios.get(`${URL}${URI}`, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

function addUsersFromApi(data) {
  return axios.post(`${URL}${URI}`, data, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

function editUsersFromApi(id) {
  return axios.get(`${URL}${URI}/${id}`, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}


function updateUsersFromApi(id, data) {
  return axios.put(`${URL}${URI}/${id}`, data, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  });
}

function deleteUsersFromApi(id) {
  // console.log("URL", URL + '/' + id)
  return axios.delete(`${URL}${URI}/${id}`, {
    headers: {
      Authorization:
        "Bearer 97b67a5aa40a3d8a6709e11f8d3986d61d4919be20cf66f961a577d4e3e1b73e",
    },
  })
}

const UserServices = {
  getUsersFromApi,
  addUsersFromApi,
  editUsersFromApi,
  updateUsersFromApi,
  deleteUsersFromApi
};

export default UserServices;
