
import { FETCH_COLORS_LOADING, FETCH_COLORS_SUCCESS, FETCH_COLORS_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED, ADD, ADD_FAILED } from '../actions';

export const initialState = {
  colors: [],
  isLoggedIn: sessionStorage.getItem( 'token' ) ? true : false,
  error: null,
  isFetching: false
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LOGIN_LOADING:
      return {
        ...state,
        isFetching: false,
        error: null
      }
    case LOGIN_SUCCESS:
      sessionStorage.setItem( 'token', action.payload );
      return {
        ...state,      
        isLoggedIn: true,
        isFetching: false,
        error: null
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case FETCH_COLORS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case FETCH_COLORS_SUCCESS:
      return {
        ...state,
        colors: action.payload,
        isFetching: false,
        error: null
      }
    case FETCH_COLORS_FAILED:
      return {
        ...state,
        colors: [],
        isFetching: false,
        error: action.payload
      }
    case ADD:
      return {
        ...state,
        colors: [ ...state.colors, action.payload ]
      }
    case ADD_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
};
