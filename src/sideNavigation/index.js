import React from 'react';
import { decorate } from './_decorators';
import List from '../grammar/verb/list';
import { Container } from './styles';

const SideNavigation = ({ verbs, location }) =>
<Container>
  <h1 className="heading">Verbs</h1>
  <List items={verbs} location={location} />
</Container>

export default decorate(SideNavigation);