export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const GET_ID = "GET_ID";
export const GET_USER_DATA = "GET_USER_DATA";
export const DELETE_ID = "DELETE_ID";

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST,
  };
}

export function getUserSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
}

export function getUserError(error) {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
}

export function addUserRequest() {
  return {
    type: ADD_USER_REQUEST,
  };
}

export function addUserSuccess(data) {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
}

export function addUserError(error) {
  return {
    type: ADD_USER_ERROR,
    payload: error,
  };
}

export function editUserRequest() {
  return {
    type: EDIT_USER_REQUEST,
  };
}

export function editUserSuccess(data) {
  return {
    type: EDIT_USER_SUCCESS,
    payload: data,
  };
}

export function editUserError(error) {
  return {
    type: EDIT_USER_ERROR,
    payload: error,
  };
}

export function updateUserRequest() {
  return {
    type: UPDATE_USER_REQUEST,
  };
}

export function updateUserSuccess(data) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
}

export function updateUserError(error) {
  return {
    type: UPDATE_USER_ERROR,
    payload: error,
  };
}

export function deleteUserRequest() {
  return {
    type: DELETE_USER_REQUEST,
  };
}

export function deleteUserSuccess(data) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
}

export function deleteUserError(error) {
  return {
    type: DELETE_USER_ERROR,
    payload: error,
  };
}

export const getUserId = (id) => {
  return {
    type: GET_ID,
    payload: id
  }
}

export const getUserData = (data) => {
  return {
    type: GET_USER_DATA,
    payload: data
  }
}

export const deleteId = (id) => {
  return {
    type: DELETE_ID,
    payload: id
  }
}
