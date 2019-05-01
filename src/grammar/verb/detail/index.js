import React from 'react';
import { decorate } from './_decorators';
import SideNavigation from '../../../sideNavigation';
import Menu from '../../../Menu/Menu.js';
import { Container, Heading, Legend, Content } from './styles';
import ButtonGroup from '../../../common/navigation/buttonGroup';
import { Label } from 'reactstrap';

const navButtons = [
  'Present',
  'Imperfect',
  'Perfect',
  'PluPerfect',
  'FuturePerfect'
]

const Detail = ({ verb, updateTense, ...rest }) => {
  if (verb) {
    if (Object.keys(verb).length) {
      return (
        <Container>
          <Menu/>
          <div className="wrapper">
          <SideNavigation location={rest.location} />
          <Heading>
            {verb.name} - {verb.translation}
          </Heading>
          {console.log('tense', verb.tense)}
          <ButtonGroup
            items={navButtons}
            handler={updateTense}
            active={verb.tense}
          />
          <Content>
            <div>
              <Legend>Singular</Legend>
              {
                Object.keys(verb[verb.tense].singular).map((item, i) => {
                  return (
                    <div className="section" key={i}>
                      <div className="wrapper">
                        <div>
                          <Label className="person">
                            {verb[verb.tense].singular[item].foreign.name}
                          </Label>
                        </div>
                        <div>
                          <span className="value textfield">
                            {verb[verb.tense].singular[item].foreign.value}
                          </span>
                        </div>
                      </div>
                      <div className="divider">|</div>
                      <div key={i} className="wrapper">
                      <div>
                        <Label className="person">
                          {verb[verb.tense].singular[item].native.name}
                        </Label>
                      </div>
                      <div>
                        <span className="value textfield">
                          {verb[verb.tense].singular[item].native.value}
                        </span>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
              </div>
              <div>
                <Legend>Plural</Legend>
                {
                  Object.keys(verb[verb.tense].plural).map((item, i) => {
                    return (item === 'they') ?
                      Object.keys(verb[verb.tense].plural[item]).map((subItem) => {
                        return (
                          <div key={i} className="wrapper">
                            <div className="section">
                              <div>
                                <Label className="person">
                                  {verb[verb.tense].plural[item][subItem].foreign.name}
                                </Label>
                              </div>
                              <div>
                                <span className="value textfield">
                                  {verb[verb.tense].plural[item][subItem].foreign.value}
                                </span>
                              </div>
                            </div>
                            <div key={i} className="wrapper">
                              <div>
                                <Label className="person">
                                  {verb[verb.tense].plural[item][subItem].native.name}
                                </Label>
                              </div>
                              <div>
                                <span className="value textfield">
                                  {verb[verb.tense].plural[item][subItem].native.value}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      }) :
                      <div key={i} className="wrapper">
                        <div className="section">
                          <div>
                            <Label className="person">
                              {verb[verb.tense].plural[item].foreign.name}
                            </Label>
                          </div>
                          <div>
                            <span className="value textfield">
                              {verb[verb.tense].plural[item].foreign.value}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <Label className="person">
                              {verb[verb.tense].plural[item].native.name}
                            </Label>
                          </div>
                          <div>
                            <span className="value textfield">
                              {verb[verb.tense].plural[item].native.value}
                            </span>
                          </div>
                        </div>
                      </div>
                  })
                }
            </div>
          </Content>
          </div>
        </Container>
      )
    }
  }

  return null;
}

export default decorate(Detail);