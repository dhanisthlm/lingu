import { handleActions } from 'redux-actions';
import axios from 'axios';

export default handleActions({
  'ADD_VERB': (state, action) => {
    return {
      ...state,
      verbs: [
        ...state.verbs,
        action.payload
      ]
    }
  },
  'LOAD_VERBS': (state, action) => {
    return {
      ...state,
      verbs: action.payload
    }
  },
  'LOAD_VERB': (state, action) => {
    const verb = state.verbs
      .filter(verb => verb._id === action.payload);

    return {
      ...state,
      verb: verb[0]
    }
  },
  'UPDATE_VERB': (state, action) => {
    const { payload } = action;
    const verb = state.verb;

    verb[payload.prop] = payload.value;

    return {
      ...state,
      verb
    }
  }
}, {
    verbs: [],
    verb: {}
  });

// selectors
export function getVerbs(state) {
  return state.verbs;
}

export function getVerbById(state) {
  return state.verb;
}
