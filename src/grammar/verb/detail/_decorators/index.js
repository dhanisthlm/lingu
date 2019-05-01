import { connect } from 'react-redux';
import { compose } from 'recompose';
import { lifeCycle } from './lifecycle';
import { handlers } from './handlers';
import { state } from '../../_decorators/state';
import { getVerbById, getVerbs } from '../../../../store';
import axios from 'axios';

const mapDispatchToProps = dispatch => ({
  loadVerb: id => {
    dispatch({
      type: 'LOAD_VERB',
      payload: id
    })
  },
  updateVerb: update => {
    dispatch({
      type: 'UPDATE_VERB',
      payload: update
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
  verb: getVerbById(state),
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
  lifeCycle
);

