import LogReducer from "./LogReducer";
import { combineReducers } from "redux";
import TechReducer from "./TechnicianReducer";

export default combineReducers({
  log: LogReducer,
  tech: TechReducer
});
