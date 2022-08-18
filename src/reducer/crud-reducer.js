import {
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR,
    ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR,
    EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_ERROR,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR, GET_ID, GET_USER_DATA, DELETE_ID
} from "../action/crud-action";

const initialState = {
    usersListLoading: false,
    usersList: [],
    id: null,
    editData: [],
    usersListError: null,
    isValid: false,
    userSaveLoading: false,
    userSaveStatus: false,
    userSaveError: null,
    editDisable: false
};

export default function crudReducer(state = initialState, action) {
    const type = action.type;
    switch (type) {
        case GET_USER_REQUEST:
            return { ...state, usersListLoading: true };
        case GET_USER_SUCCESS:
            return { ...state, usersListLoading: false, usersList: action.payload };
        case GET_USER_ERROR:
            return {
                ...state,
                usersListLoading: false,
                usersListError: action.payload,
            };

        case ADD_USER_REQUEST:
            return { ...state, userSaveLoading: true, isValid: false };
        case ADD_USER_SUCCESS:
            return { ...state, userSaveLoading: false, userSaveStatus: true, isValid: true };
        case ADD_USER_ERROR:
            return {
                ...state,
                userSaveLoading: false,
                isValid: false,
                userSaveError: action.payload.response.data,
            };

        case GET_ID:
            return { ...state, id: action.payload };

        case GET_USER_DATA:
            return { ...state, id: action.payload };

        case DELETE_ID:
            return { ...state, id: null, userSaveError: null, isValid: false, editData: null }

        case EDIT_USER_REQUEST:
            return { ...state, editDisable: true};
        case EDIT_USER_SUCCESS:
            console.log("Edit Data", action.payload)
            return { ...state, editData: action.payload, editDisable: false };
        case EDIT_USER_ERROR:
            return {
                ...state,
                editDisable: false,
                usersListError: action.payload,
            };

        case UPDATE_USER_REQUEST:
            return { ...state, userSaveLoading: true, isValid: false };
        case UPDATE_USER_SUCCESS:
            console.log("UPDATE_USER_SUCCESS")
            return { ...state, userSaveLoading: false, userSaveStatus: true, id: null, isValid: true };
        case UPDATE_USER_ERROR:
            console.log("UPDATE_USER_ERROR")
            return {
                ...state,
                isValid: false,
                userSaveLoading: false,
                userSaveError: action.payload.response.data,
            };

        case DELETE_USER_REQUEST:
            return { ...state, userSaveLoading: true, isValid: false }
        case DELETE_USER_SUCCESS:
            return { ...state, userSaveStatus: true, userSaveLoading: false, isValid: true }
        case DELETE_USER_ERROR:
            return { ...state, userSaveLoading: false, userSaveError: action.payload, isValid: false }
        default:
            return state;
    }
}
