import {combineReducers} from "redux";
import task from "./task";


const rootReducer = combineReducers({
    task: task
});

export default rootReducer;