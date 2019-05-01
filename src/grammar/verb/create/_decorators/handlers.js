import { compose, withHandlers, mapPropsStream } from 'recompose';
import shortId from 'shortid';
import { Observable, fromEvent } from "rxjs"
import { delay } from 'rxjs/operators';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { state } from '../../_decorators/state';

const observable$ = new Observable(observer => {
  observer.next('foo')
  observer.complete();
})

const handleTitle = withHandlers({
  handleTitle: ({ setState, state, getRef }) => event => {
    const { id } = event.target.dataset;
    const formData = event.target.value;

    setState({
      ...state,
      [id]: formData
    });
  }
});

const handleVerb = withHandlers({
  handleVerb: ({ setState, state }) => event => {
    const {
      id,
      type,
      gender,
      language
    } = event.target.dataset;

    const person = event.target.name;
    const { tense } = state;
    const storeData = state[tense][type][id];

    const formData = {
      [language]: {
        ...state[tense][type][id][language],
        name: person,
        value: event.target.value
      }
    }

    const genderObj = {
      ...storeData,
      [gender]: {
        ...storeData[gender],
        [language]: {
          name: person,
          value: event.target.value
        }
      }
    }

    const data = gender ? genderObj : formData;

    console.log('data', genderObj)

    setState({
      ...state,
      [tense]: {
        ...state[tense],
        [type]: {
          ...state[tense][type],
            [id]: {
              ...state[tense][type][id],
              ...data
            }
          }
        }
    });
  }
});

const handleTense = withHandlers({
  handleTense: props => event => {
    props.setState({
      ...props.state, tense: event.target.id
    })
  }
});

const handleSubmit = withHandlers({
  handleSubmit: ({ addVerb, state, setState, stateHandlers }) => event => {
    event.preventDefault();
    console.log(state)
    addVerb(
      Object.assign({}, {
        ...state,
        tense: 'Present',
        id: shortId.generate()
      })
    )
    console.log(state, stateHandlers)
    setState({ ...state })
  }
});

export const handlers = compose(
  handleTense,
  handleSubmit,
  handleVerb,
  handleTitle,
)