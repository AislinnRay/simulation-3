import axios from 'axios'

const initialState = {
  user: {
    username: '',
    profilePic: '',
    userId: 0
  }
  }

  const LOGIN_USER = 'LOGIN_USER'
  const LOGOUT_USER = 'LOGOUT_USER'
  const GET_USER = 'GET_USER'
  const FULFILLED = "_FULFILLED"

export function loginUser(user){
  return {
      type: LOGIN_USER,
      payload: user
    }
}

export function logoutUser(user){
    return {
        type: LOGOUT_USER, payload: user
    }
}

export function getUser(){
    const user = axios.get('/auth/user')
    return {
        type: GET_USER, payload: initialState
    }
}
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, user: action.payload };
      case LOGOUT_USER:
        return initialState;
      case GET_USER + '_PENDING':
          return state
      case GET_USER + FULFILLED:
          return {...state, user: action.payload}
      case GET_USER + '_REJECTED':
          return initialState
      default:
        return initialState;
    }
  }