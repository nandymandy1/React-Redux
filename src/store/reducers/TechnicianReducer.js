import {
  ADD_TECH,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING
} from "../actions/types";

const initialState = {
  techs: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== payload),
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      };
    default:
      return {
        ...state
      };
  }
};
