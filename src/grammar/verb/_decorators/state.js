
import { withState, withStateHandlers } from 'recompose';

  const tenses = [
    'Present',
    'Imperfect',
    'Perfect',
    'PluPerfect',
    'FuturePerfect'
  ];

  const singular = {
    me: {
      foreign: {
        name: 'Ja',
        value: ''
      },
      native: {
        name: 'Jag',
        value: ''
      }
    },
    you: {
      foreign: {
        name: 'Ti',
        value: ''
      },
      native: {
        name: 'Du',
        value: ''
      }
    },
    he: {
      foreign: {
        name: 'On',
        value: ''
      },
      native: {
        name: 'Han',
        value: ''
      }
    },
    she: {
      foreign: {
        name: 'On',
        value: ''
      },
      native: {
        name: 'Hon',
        value: ''
      }
    },
    it: {
      foreign: {
        name: 'Ono',
        value: ''
      },
      native: {
        name: 'Den',
        value: ''
      }
    },
  }

  const plural = {
    we: {
      foreign: {
        name: 'Mi',
        value: ''
      },
      native: {
        name: 'Vi',
        value: ''
      }
    },
    you: {
      foreign: {
        name: 'Vi',
        value: ''
      },
      native: {
        name: 'Ni',
        value: ''
      }
    },
    they: {
      masculin: {
        foreign: {
          name: 'Oni',
          value: ''
        },
        native: {
          name: 'Dom(f)',
          value: ''
        }
      },
      feminin: {
        foreign: {
          name: 'One',
          value: ''
        },
        native: {
          name: 'Dom(m)',
          value: ''
        },
        value: ''
      },
      neutrum: {
        foreign: {
          name: 'Ono',
          value: ''
        },
        native: {
          name: 'Dom(n)',
          value: ''
        }
      }
    }
  }

  const initialState = () => {
    const obj = { tense: 'Present' };
    tenses.forEach(tense => {
      obj[tense] = {
        singular,
        plural
      }
    })
    return obj;
  }

export const state = withState(
  'state', 'setState', initialState()
);