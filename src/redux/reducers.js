import { combineReducers } from "redux";
import { Productreducers } from "./reducer";
import { Selectedreducers } from "./reducer";

const reducers = combineReducers({
    products: Productreducers,
    seleced: Selectedreducers,
})
export default reducers
