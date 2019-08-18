import axios from 'axios';
import API_ENDPOINT from '../config';

export const FETCH_USER_DATA_ERROR = 'users/FETCH_USER_DATA_ERROR';
export const FETCH_USER_DATA_INITIALIZE = 'users/FETCH_USER_DATA_INITIALIZE';
export const FETCH_USER_DATA_SUCCESS = 'users/FETCH_USER_DATA_SUCCESS';

const initialState = {
  currentPage: 0,
  isFetching: false,
  noUsersToLoad: true,
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_USER_DATA_INITIALIZE:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        currentPage: action.currentPage,
        isFetching: false,
        noUsersToLoad: action.noUsersToLoad,
        users: action.users,
      } 
    default:
      return state
  }
}

export const initialFetchUsers = () => {
  return async dispatch => {
    dispatch({ type: FETCH_USER_DATA_INITIALIZE });
    try {
      const method = 'get';
      const url = `${API_ENDPOINT}/api/users?delay=3&page=1&per_page=6`;
      const response = await axios.request({
        url,
        method,
      });
      dispatch({
        type: FETCH_USER_DATA_SUCCESS,
        currentPage: 2,
        users: response.data.data,
      });
      return true;
     } catch (e) {
       dispatch({
         type: FETCH_USER_DATA_ERROR,
       });
       return false;
     }
  }
}

export const fetchMoreUsers = () => {
  return async (dispatch, getState) => {
    try {
      const { users, currentPage, noUsersToLoad } = getState().users;
      if (noUsersToLoad) return true;
      const method = 'get';
      const url = `${API_ENDPOINT}/api/users?delay=3&page=${currentPage + 1}`;
      const response = await axios.request({
        url,
        method,
      });
      dispatch({
        type: FETCH_USER_DATA_SUCCESS,
        currentPage: currentPage + 1,
        users: [...users, ...response.data.data],
        noUsersToLoad: response.data.data.length === 0,
      });
      return true;
     } catch (e) {
       dispatch({
         type: FETCH_USER_DATA_ERROR,
       });
       return false;
     }
  }
}
