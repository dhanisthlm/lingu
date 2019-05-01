import { connect } from 'react-redux';
import { getVerbs } from '../../../../store';
import { handlers } from './handlers';
import { state } from '../../_decorators/state';
import { lifeCycle } from './lifecycle';
import { compose, pure } from 'recompose';
import axios from 'axios';

const mapDispatchToProps = dispatch => ({
  addVerb: verb => {
    axios.post('/api/create', verb)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    dispatch({
      type: 'ADD_VERB',
      payload: verb
    })
  },

  getAllVerbs: () => {
    axios.get('/api/read')
      .then(function (result) {
        dispatch({
          type: 'LOAD_VERBS',
          payload: result.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

const mapStateToProps = state => ({
  verbs: getVerbs(state)
});

const store = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const decorate = compose(
  store,
  state,
  handlers,
  lifeCycle,
  pure
);

