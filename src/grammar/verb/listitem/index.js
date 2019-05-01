import React from 'react';
import { Item } from './styles';

const ListItem = ({ item, ...rest }) => {
  if (rest.location) {
    const id = rest.location.pathname.split('/').pop();
    const border = id === item._id ? '1px solid #ff4081' : 'unset';
    var styles = {
      borderBottom: border
    }
  } else {
    styles = {};
  }

  

  return (
    <Item >
      <span style={styles}>{item.name} - {item.translation}</span>
    </Item>
  )
}

export default ListItem;