import { combineReducers } from "redux";
import userReducer from './userReducer';
import scheduleReducer from './scheduleReducer';
 
const rootReducer = combineReducers({
    userReducer: userReducer,
    scheduleReducer: scheduleReducer
})

export default rootReducer;