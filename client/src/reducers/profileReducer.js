/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE_PROFILE,
  CREATE_PROFILE_ERROR,
  CREATE_EDUCATION,
  CREATE_EDUCATION_ERROR,
  CREATE_EXPIRENCE,
  CREATE_EXPIRENCE_ERROR,
  MY_PROFILE,
  MY_PROFILE_ERROR,
} from "../actions/types";

const INTIAL_VALUES = {
  profile: null,
  expirence: [],
  education: [],
  profiles: [],
  loading: true,
  error: null,
};

export default (state = INTIAL_VALUES, action) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case CREATE_EDUCATION:
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case CREATE_EXPIRENCE:
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case CREATE_PROFILE_ERROR:
    case CREATE_EDUCATION_ERROR:
    case CREATE_EXPIRENCE_ERROR:
    case MY_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
