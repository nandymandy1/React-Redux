import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS
} from "../actions/types";

const initialState = {
  logs: null,
  error: null,
  current: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.log("Logs Error ", payload);
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      };
    case ADD_LOG: {
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false
      };
    }
    case DELETE_LOG: {
      // eslint-disable-next-line
      M.toast({ html: `Log ${payload} deleted.` });
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== payload),
        loading: false
      };
    }
    case UPDATE_LOG: {
      // eslint-disable-next-line
      M.toast({ html: `Log ${payload.id} updated.` });
      return {
        ...state,
        logs: state.logs.map(log => (log.id === payload.id ? payload : log)),
        loading: false,
        current: null
      };
    }
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
