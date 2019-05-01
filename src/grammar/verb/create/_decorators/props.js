import {
  withProps,
  renameProps,
  defaultProps,
  mapProps
} from 'recompose';

/*
const props = compose(
  defaultProps({
    counter: 0
  }),
  renameProps({
    counter: 'xCounter'
  }),
  withProps({
    person: {
      name: 'Daniel',
      age: 444,
      sex: 'male'
    }
  }),
  mapProps(({ person, ...rest }) => ({
      ...rest,
      person: {
          name: person.name.toUpperCase(),
          age: person.age
      }
  })),
  flattenProp('person')
);
*/