import { connect } from 'react-redux';
import { getVerbs } from '../../../store';

const mapStateToProps = state => ({
  verbs: getVerbs(state)
});

const store = connect(
  mapStateToProps
);

export const decorate = store;

