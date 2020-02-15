import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from "./types";

import ax from "../../services/api";

export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const { data } = await ax.get("/logs");
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch ({ response }) {
    dispatch({
      type: LOGS_ERROR,
      payload: response.data
    });
  }
};

export const addLog = newLog => async dispatch => {
  try {
    setLoading();
    const { data } = await ax.post("/logs", newLog);
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch ({ response }) {
    dispatch({
      type: LOGS_ERROR,
      payload: response.data
    });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await ax.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const setCurrent = log => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: log
  });
};

export const updateLog = log => async dispatch => {
  try {
    setLoading();
    let { data } = await ax.put(`/logs/${log.id}`, log);
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
    clearCurrent();
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const clearCurrent = () => async dispatch => {
  console.log("Cleared");
  dispatch({
    type: CLEAR_CURRENT
  });
};

export const searchLogs = keyword => async dispatch => {
  try {
    setLoading();
    let { data } = await ax.get(`/logs?q=${keyword}`);
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
