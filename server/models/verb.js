const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VerbSchema = new Schema({
    name: {
      type: String
    },
    translation: {
      type: String
    },
    tense: {
      type: String,
      required: true,
      max: 100
    },
    Present: {
      singular: {
        me: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        },
        you: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        },
        he: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        },
        she: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        },
        it: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        }
      },
      plural: {
        we: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        },
        you: {
          foreign: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          native: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        },
        they: {
          masculin: {
            foreign: {
              name: {
                type: String
              },
              value: {
                type: String
              }
            },
            native: {
              name: {
                type: String
              },
              value: {
                type: String
              }
            }
          },
          feminin: {
            foreign: {
              name: {
                type: String
              },
              value: {
                type: String
              }
            },
            native: {
              name: {
                type: String
              },
              value: {
                type: String
              }
            }
          },
          neutrum: {
            foreign: {
              name: {
                type: String
              },
              value: {
                type: String
              }
            },
            native: {
              name: {
                type: String
              },
              value: {
                type: String
              }
            }
          }
        }
      }
    },
    Imperfect: {
      singular: {
        me: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        he: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        she: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        it: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        }
      },
      plural: {
        we: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        they: {
          masculine: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          feminin: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          neutrum: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        }
      }
    },
    Perfect: {
      singular: {
        me: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        he: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        she: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        it: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        }
      },
      plural: {
        we: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        they: {
          masculine: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          feminin: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          neutrum: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        }
      }
    },
    PluPerfect: {
      singular: {
        me: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        he: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        she: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        it: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        }
      },
      plural: {
        we: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        they: {
          masculine: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          feminin: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          neutrum: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        }
      }
    },
    FuturePerfect: {
      singular: {
        me: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        he: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        she: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        it: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        }
      },
      plural: {
        we: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        you: {
          name: {
            type: String
          },
          value: {
            type: String
          }
        },
        they: {
          masculine: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          feminin: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          },
          neutrum: {
            name: {
              type: String
            },
            value: {
              type: String
            }
          }
        }
      }
    },
});


// Export the model
module.exports = mongoose.model('Verb', VerbSchema);