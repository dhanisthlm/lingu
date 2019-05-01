import React, { Fragment } from 'react';
import { decorate } from './_decorators';
import Menu from '../../../Menu/Menu.js';
import SideNavigation from '../../../sideNavigation';
import ButtonGroup from '../../../common/navigation/buttonGroup';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { setObservableConfig, componentFromStream } from 'recompose';

import {
  Form,
  Label,
  Input,
} from 'reactstrap';

import {
  Legend,
  Heading,
  HeadingWithMargin,
  Container,
  Content,
  SubmitButton,
  Main
} from './styles';

const navButtons = [
  'Present',
  'Imperfect',
  'Perfect',
  'PluPerfect',
  'FuturePerfect'
]

setObservableConfig({
  fromESObservable: from,
  toESObservable: stream => stream
});

const CreateVerb = ({
  state,
  handleTitle,
  handleVerb,
  handleSubmit,
  handleTense,
  verbs,
  text,
  onInput,
  ...rest
}) =>
<Fragment>
  <Menu/>
  <Container>
  <SideNavigation verbs={verbs} />
    <Main>
      <Heading>
        Create New Verb -&nbsp;
        <span className="tense">
          {state.tense}
        </span>
      </Heading>
      <ButtonGroup
        items={navButtons}
        handler={handleTense}
        active={state.tense}
      />
      <Form>
        <HeadingWithMargin>
          <Input
            className="textfield"
            onChange={handleTitle}
            type="text"
            name="name"
            data-id="name"
            placeholder="Write new verb"
            value={text}
          />
          <Input
            className="textfield"
            onChange={handleTitle}
            type="text"
            name="name"
            data-id="translation"
            placeholder="Write translation"
            value={state.translation}
          />
        </HeadingWithMargin>
        <Content>
          <div className="card-column">
            <Legend>Singular</Legend>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="me">
                    Ja
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Ja"
                    data-language="foreign"
                    data-type="singular"
                    data-id="me"
                    data-value={`${JSON.stringify(state[state.tense].singular.me.foreign)}`}
                    value={`${state[state.tense].singular.me.foreign
                      ? state[state.tense].singular.me.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div class="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="me">
                    Jag
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Jag"
                    data-language="native"
                    data-type="singular"
                    data-id="me"
                    value={`${state[state.tense].singular.me.native
                      ? state[state.tense].singular.me.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="you">
                    Ti
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Ti"
                    data-language="foreign"
                    data-type="singular"
                    data-id="you"
                    value={`${state[state.tense].singular.you.foreign
                      ? state[state.tense].singular.you.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="you">
                    Du
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Du"
                    data-language="native"
                    data-type="singular"
                    data-id="you"
                    value={`${state[state.tense].singular.you.native
                      ? state[state.tense].singular.you.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="he">
                    On
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    data-language="foreign"
                    name="On"
                    data-type="singular"
                    data-id="he"
                    value={`${state[state.tense].singular.he.foreign
                      ? state[state.tense].singular.he.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="he">
                    Han
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    data-language="native"
                    name="Han"
                    data-type="singular"
                    data-id="he"
                    value={`${state[state.tense].singular.he.native
                      ? state[state.tense].singular.he.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 35 + 'px'}}
                    className="label"
                    htmlFor="she">
                    Ona
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    className="textfield"
                    type="text"
                    data-language="foreign"
                    name="Ona"
                    data-type="singular"
                    data-id="she"
                    value={`${state[state.tense].singular.she.foreign
                      ? state[state.tense].singular.she.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 35 + 'px'}}
                    className="label"
                    htmlFor="she">
                    Hon
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    className="textfield"
                    data-language="native"
                    type="text"
                    name="Hon"
                    data-type="singular"
                    data-id="she"
                    value={`${state[state.tense].singular.she.native
                      ? state[state.tense].singular.she.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 35 + 'px'}}
                    className="label"
                    htmlFor="it">
                    Ono
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    data-language="foreign"
                    className="textfield"
                    name="Ono"
                    data-type="singular"
                    data-id="it"
                    value={`${state[state.tense].singular.it.foreign
                      ? state[state.tense].singular.it.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 35 + 'px'}}
                    className="label"
                    htmlFor="it">
                    Den
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    data-language="native"
                    name="Den"
                    data-type="singular"
                    data-id="it"
                    value={`${state[state.tense].singular.it.native
                      ? state[state.tense].singular.it.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            </div>
            <div className="card-column">
            <Legend>Plural</Legend>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 20 + 'px'}}
                    className="label"
                    htmlFor="we">
                    Mi
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    data-language="foreign"
                    name="Mi"
                    data-type="plural"
                    data-id="we"
                    value={`${state[state.tense].plural.we.foreign
                      ? state[state.tense].plural.we.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 20 + 'px'}}
                    className="label"
                    htmlFor="we">
                    Vi
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    data-language="native"
                    name="Vi"
                    data-type="plural"
                    data-id="we"
                    value={`${state[state.tense].plural.we.native
                      ? state[state.tense].plural.we.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 20 + 'px'}}
                    className="label"
                    htmlFor="you">
                    Vi
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    name="Vi"
                    className="textfield"
                    data-language="foreign"
                    data-type="plural"
                    data-id="you"
                    value={`${state[state.tense].plural.you.foreign
                      ? state[state.tense].plural.you.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 20 + 'px'}}
                    className="label"
                    htmlFor="you">
                    Ni
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    name="Ni"
                    className="textfield"
                    data-language="native"
                    data-type="plural"
                    data-id="you"
                    value={`${state[state.tense].plural.you.native
                      ? state[state.tense].plural.you.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="they">
                    Oni
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Oni"
                    data-language="foreign"
                    data-gender="masculin"
                    data-type="plural"
                    data-id="they"
                    value={`${state[state.tense].plural.they.masculin.foreign
                      ? state[state.tense].plural.they.masculin.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 60 + 'px'}}
                    className="label"
                    htmlFor="they">
                    Dom(f)
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Dom(f)"
                    data-language="native"
                    data-gender="masculin"
                    data-type="plural"
                    data-id="they"
                    value={`${state[state.tense].plural.they.masculin.native
                      ? state[state.tense].plural.they.masculin.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="they">
                    One
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="One"
                    data-language="foreign"
                    data-gender="feminin"
                    data-type="plural"
                    data-id="they"
                    value={`${state[state.tense].plural.they.feminin.foreign
                      ? state[state.tense].plural.they.feminin.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 60 + 'px'}}
                    className="label"
                    htmlFor="they">
                    Dom(m)
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Dom(m)"
                    data-language="native"
                    data-gender="feminin"
                    data-type="plural"
                    data-id="they"
                    value={`${state[state.tense].plural.they.feminin.native
                      ? state[state.tense].plural.they.feminin.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
            <div className="row box effect2 align-items-end">
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 30 + 'px'}}
                    className="label"
                    htmlFor="they">
                    Ono
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    data-language="foreign"
                    name="Ono"
                    data-gender="neutrum"
                    data-type="plural"
                    data-id="they"
                    value={`${state[state.tense].plural.they.neutrum.foreign
                      ? state[state.tense].plural.they.neutrum.foreign.value : ''}`}
                  />
                </div>
              </div>
              <div className="conjunction">
                <div>
                  <Label
                    style={{width: 60 + 'px'}}
                    className="label"
                    htmlFor="they">
                    Dom(n)
                  </Label>
                </div>
                <div>
                  <Input
                    onChange={handleVerb}
                    type="text"
                    className="textfield"
                    name="Dom(n)"
                    data-language="native"
                    data-gender="neutrum"
                    data-type="plural"
                    data-id="they"
                    value={`${state[state.tense].plural.they.neutrum.native
                      ? state[state.tense].plural.they.neutrum.native.value : ''}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <div className="row submit-row">
          <SubmitButton className="btn btn-secondary"
            onClick={handleSubmit}>
            Create Verb
          </SubmitButton>
        </div>
      </Form>
    </Main>
  </Container>
  </Fragment>

const CreateVerbStream = componentFromStream(
  props$ => props$.pipe(map(CreateVerb))
);

export default decorate(CreateVerbStream);


