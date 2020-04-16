import {combineReducers} from "redux";
import task from "./task";
import filter from "./filter"


const rootReducer = combineReducers({
    task: task,
    filter: filter
});

export default rootReducer;