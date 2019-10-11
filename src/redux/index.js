import { createStore } from "redux";
import Reducer, { initialState } from "./reducers";

const store = createStore(Reducer, initialState);
export default store;
