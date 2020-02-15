import {
  GET_TECHS,
  ADD_TECH,
  TECH_ERROR,
  DELETE_TECH,
  SET_LOADING
} from "./types";
import ax from "../../services/api";

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const { data } = await ax.get("/techs");
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch ({ response }) {
    dispatch({
      type: TECH_ERROR,
      payload: response.data
    });
  }
};

export const addTech = newTech => async dispatch => {
  try {
    setLoading();
    const { data } = await ax.post("/techs", newTech);
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch ({ response }) {
    dispatch({
      type: TECH_ERROR,
      payload: response.data
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await ax.delete(`/techs/${id}`);
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch ({ response }) {
    dispatch({
      type: TECH_ERROR,
      payload: response.data
    });
  }
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
