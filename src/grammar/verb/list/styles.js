import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { reduce } from 'rxjs/operators';

export const VerbList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0 0 0;
`;

export const NavigationLink = styled.div`
  .link {
    &:hover {
      text-decoration: none !important;
    }
  }
`;


