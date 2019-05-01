import { compose } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';

const onDidMount = withLifecycle({
  onDidMount(props) {
    props.getAllVerbs();
  }
});

const onDidUpdate = withLifecycle({
  onDidUpdate(prevProps, props) {
  }
});

const onReceiveProps = withLifecycle({
  onReceiveProps(props, nextProps, snapShot) {
    const id = props.location.pathname.split('/').pop();
    console.log('baz')
    props.loadVerb(id);
  }
});

export const lifeCycle = compose(
  onDidMount,
  onDidUpdate,
  onReceiveProps
)