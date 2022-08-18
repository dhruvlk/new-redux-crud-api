import { combineReducers } from "redux";
import crudReducer from "./crud-reducer";

const rootReducer = combineReducers({
    crudReducer: crudReducer
});

export default rootReducer;