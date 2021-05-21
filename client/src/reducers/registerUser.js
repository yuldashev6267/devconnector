/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import {
  SIGN_UP,
  SIGN_UP_FAIL,
  LOG_IN,
  LOG_IN_FAIL,
  MY_ACCOUNT,
  MY_ACCOUNT_FAIL,
  LOG_OUT,
  LOG_OUT_FAIL,
} from "../actions/types";
const INTIAL_VALUES = {
  token: localStorage.getItem("token"),
  isAuthenticate: false,
  isLoading: true,
  isError: false,
  user: null,
};

export default (state = INTIAL_VALUES, action) => {
  switch (action.type) {
    case SIGN_UP:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticate: true,
        isLoading: false,
        user: action.payload,
      };
    case LOG_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticate: true,
        isLoading: false,
        user: action.payload,
      };
    case MY_ACCOUNT:
      return {
        ...state,
        isAuthenticate: true,
        isLoading: false,
        user: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        token: null,
        isAuthenticate: false,
      };
    case SIGN_UP_FAIL:
    case LOG_IN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticate: false,
        isLoading: false,
        isError: action.payload,
      };
    case MY_ACCOUNT_FAIL:
      return {
        ...state,
        isAuthenticate: false,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
