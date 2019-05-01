import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../listitem';
import { VerbList, NavigationLink } from './styles';

const List = ({ items, ...rest }) =>
  <VerbList>
    {
      items.map((item, i) =>
        <NavigationLink>
          <Link className="link" key={i} to={`/verb/detail/${item._id}`}>
            <ListItem location={rest.location} item={item} />
          </Link>
        </NavigationLink>
      )
    }
  </VerbList>

export default List;