import { createStore } from "redux";
import reducer from "./reducers/CountReducer";

var store = createStore(reducer);

export default store;
