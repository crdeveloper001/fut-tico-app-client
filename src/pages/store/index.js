import { createStore } from "redux";
import reducer from "./reducers/navigation";

const store = createStore(reducer);

export default store;