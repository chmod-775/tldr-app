export const SET_TYPE = 'comments/SET_TYPE'
export const SET_KEY = 'comments/SET_KEY'
export const SET_COMMENTS = 'comments/SET_COMMENTS'
export const SET_APP = 'comments/SET_APP'


const testData = {
  "ranked_entities": {
    "reason": 1,
    "sucks": 0.1,
    "Sam": 0
  },
  "title": "Sam sucks",
  "description": "The reason Sam sucks is that he just does.",
  "rating": "0",
  "app_id": null,
  "app_type": null,
  "comments": [
    {
      "title": "Wow, it really is true!!",
      "content": "I thought Sam was probably an ok guy, but this app totally convinced me otherwise!",
      "updated_at": 1524410619,
      "rating": 5,
      "sentiment": 0.95,
      "entities": [
        "Sam",
        "guy",
        "app",
        "convinced"
      ]
    },
    {
      "title": "Doesn't this app seem kind of petty?",
      "content": "I mean, regardless of whether or not Sam sucks, why go through the trouble of making an app about it?",
      "updated_at": 1524410619,
      "rating": 2,
      "sentiment": 0.35,
      "entities": [
        "Sam",
        "trouble",
        "app"
      ]
    },
    {
      "title": "Petty? You're petty!!",
      "content": "People should be free to make any app they want! Maybe you don't like it, and that's fine, but let those of us who ant to see Sam for what he really is be free!!",
      "updated_at": 1524410619,
      "rating": 5,
      "sentiment": 0.05,
      "entities": [
        "People",
        "free",
        "app",
        "want"
      ]
    }
  ]
};

const initialState = {
  type: '',
  key: '',
  comments: [],
  app: testData,
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
