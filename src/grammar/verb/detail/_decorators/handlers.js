
import { withHandlers } from 'recompose';

const updateTense = withHandlers({
  updateTense: props => event => {
    props.setState({
      tense: event.target.id
    })

    props.updateVerb({
      prop: 'tense',
      value: event.target.id
    })
  }
});

export const handlers = updateTense;
