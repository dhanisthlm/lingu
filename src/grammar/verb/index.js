import React, { Fragment } from 'react';
import { decorate } from './_decorators';
import SideNavigation from '../../sideNavigation';
import {
  MainArea,
  AddVerbButton,
  WhiteLink,
} from './styles';

const Verb = ({ verbs }) =>
  <Fragment>
    <SideNavigation verbs={verbs} />
    <MainArea>
      <AddVerbButton color="info">
        <WhiteLink to="/verb/create">Add verb</WhiteLink>
      </AddVerbButton>
    </MainArea>
  </Fragment>

export default decorate(Verb);


