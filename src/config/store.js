import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

function configureStore() {
    const middlewares = applyMiddleware(thunk)
    const store = createStore(rootReducer, middlewares);
    return store;
}

export default configureStore;