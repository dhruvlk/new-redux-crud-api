import { getUserRequest, getUserSuccess, getUserError, 
    addUserRequest, addUserSuccess, addUserError,
    editUserRequest, editUserSuccess, editUserError,
    updateUserRequest, updateUserSuccess, updateUserError,
    deleteUserRequest, deleteUserSuccess, deleteUserError } from "../action/crud-action";
import UserServices from "../services/crud-services";

export function getUsersFromApiMiddleware() {
    return (dispatch) => {
        dispatch(getUserRequest());
        UserServices.getUsersFromApi()
            .then((res) => {
                const { data } = res;
                dispatch(getUserSuccess(data));
            })
            .catch((error) => {
                dispatch(getUserError(error));
            });
    };
}

export function addUsersFromApiMiddleware(data) {
    return (dispatch) => {
        dispatch(addUserRequest());
        UserServices.addUsersFromApi(data)
            .then((res) => {
                const { data } = res;
                dispatch(addUserSuccess(data));
            })
            .catch((error) => {
                dispatch(addUserError(error));
            });
    };
}

export function editUsersFromApiMiddleware(id) {
    return (dispatch) => {
        dispatch(editUserRequest());
        UserServices.editUsersFromApi(id)
            .then((res) => {
                const { data } = res;
                dispatch(editUserSuccess(data));
            })
            .catch((error) => {
                dispatch(editUserError(error));
            });
    };
}

export function updateUsersFromApiMiddleware(newId,data) {
    return (dispatch) => {
        dispatch(updateUserRequest());
        UserServices.updateUsersFromApi(newId,data)
            .then((res) => {
                const { data } = res;
                dispatch(updateUserSuccess(data));
            })
            .catch((error) => {
                dispatch(updateUserError(error));
            });
    };
}

export function deleteUsersFromApiMiddleware(id) {
    return (dispatch) => {
        dispatch(deleteUserRequest());
        UserServices.deleteUsersFromApi(id)
            .then((res) => {
                const { id } = res;
                dispatch(deleteUserSuccess(id));
            })
            .catch((error) => {
                dispatch(deleteUserError(error));
            });
    };
}