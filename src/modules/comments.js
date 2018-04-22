export const SET_TYPE = 'comments/SET_TYPE'
export const SET_KEY = 'comments/SET_KEY'
export const SET_COMMENTS = 'comments/SET_COMMENTS'
export const SET_APP = 'comments/SET_APP'

const initialState = {
  type: '',
  key: '',
  comments: [],
  app: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      }
    case SET_KEY:
      return {
        ...state,
        key: action.payload,
      }
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    case SET_APP:
      return {
        ...state,
        app: action.payload,
      }
    default:
      return state;
  }
}

export const setType = (type) => {
  return {
    type: SET_TYPE,
    payload: type,
  };
}

export const setKey = (key) => {
  return {
    type: SET_KEY,
    payload: key,
  };
}

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
}

export const setApp = (app) => {
  return {
    type: SET_APP,
    payload: app,
  };
}
