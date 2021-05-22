import instance from "../Api/axiosInstance";
import history from "../history";
import {
  SIGN_UP,
  SIGN_UP_FAIL,
  LOG_IN,
  LOG_IN_FAIL,
  MY_ACCOUNT,
  MY_ACCOUNT_FAIL,
  LOG_OUT,
  LOG_OUT_FAIL,
  CREATE_PROFILE,
  CREATE_PROFILE_ERROR,
  CREATE_EXPIRENCE,
  CREATE_EXPIRENCE_ERROR,
  CREATE_EDUCATION,
  CREATE_EDUCATION_ERROR,
  MY_PROFILE,
  MY_PROFILE_ERROR,
  DELETE_EDUCATION,
  DELETE_EDUCATION_ERROR,
  DELETE_EXPIRENCE,
  DELETE_EXPIRENCE_ERROR,
} from "./types";

export const myAccount = () => async (dispatch) => {
  try {
    const response = await instance.get("/users/me", {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: MY_ACCOUNT, payload: response.data });
  } catch (error) {
    console.log("error1", error.response.data);
    dispatch({ type: MY_ACCOUNT_FAIL, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: MY_ACCOUNT_FAIL, payload: null });
    }, 5000);
  }
};

export const myProfile = () => async (dispatch) => {
  try {
    const response = await instance.get("/profiles/me", {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: MY_PROFILE, payload: response.data });
  } catch (error) {
    dispatch({ type: MY_PROFILE_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: MY_PROFILE_ERROR, payload: null });
    }, 5000);
  }
};

export const userRegistaration = (values) => async (dispatch) => {
  try {
    const response = await instance.post("/users/signup", values, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: SIGN_UP, payload: response.data });
    history.push("/dashboard");
    dispatch(myAccount());
  } catch (error) {
    console.log("error2", error.message);

    dispatch({ type: SIGN_UP_FAIL, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: SIGN_UP_FAIL, payload: null });
    }, 5000);
  }
};

export const userLogin = (values) => async (dispatch) => {
  try {
    const response = await instance.post("/users/login", values, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: LOG_IN, payload: response.data });
    dispatch(myAccount());

    history.push("/dashboard");
  } catch (error) {
    console.log("error3", error.message);
    dispatch({ type: LOG_IN_FAIL, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: LOG_IN_FAIL, payload: null });
    }, 5000);
  }
};

export const deleteMe = () => async (dispatch) => {
  try {
    const response = await instance.delete("/users/deleteMe", {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: LOG_OUT });
    history.push("/");
  } catch (error) {
    console.log("error4", error.message);
    dispatch({ type: LOG_OUT_FAIL, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: LOG_OUT_FAIL, payload: null });
    }, 5000);
  }
};

export const createProfile = (values) => async (dispatch) => {
  try {
    const response = await instance.post("/profiles", values, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: CREATE_PROFILE, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: CREATE_PROFILE_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({
        type: CREATE_PROFILE_ERROR,
        payload: null,
      });
    }, 50000);
  }
};

export const createExpirence = (values) => async (dispatch) => {
  try {
    const response = await instance.post("/profiles/add-expirence", values, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: CREATE_EXPIRENCE, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: CREATE_EXPIRENCE_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: CREATE_EXPIRENCE_ERROR, payload: null });
    }, 5000);
  }
};

export const createEducation = (values) => async (dispatch) => {
  try {
    const response = await instance.post("/profiles/add-education", values, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: CREATE_EDUCATION, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: CREATE_EDUCATION_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({ type: CREATE_EDUCATION_ERROR, payload: null });
    }, 5000);
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const response = await instance.delete(`/profile/delete-education/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: DELETE_EDUCATION, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: DELETE_EDUCATION_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({
        type: DELETE_EDUCATION_ERROR,
        payload: null,
      });
    }, 5000);
  }
};
export const deleteExpirence = (id) => async (dispatch) => {
  try {
    const response = await instance.delete(`/profile/delete-expirence/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: DELETE_EXPIRENCE, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: DELETE_EXPIRENCE_ERROR, payload: error.response.data });
    setTimeout(() => {
      dispatch({
        type: DELETE_EXPIRENCE_ERROR,
        payload: null,
      });
    }, 5000);
  }
};
