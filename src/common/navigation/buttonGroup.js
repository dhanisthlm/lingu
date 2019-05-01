import React from 'react';
import { CenteredButtonGroup } from './styles';

const ButtonGroup = ({
  items,
  handler,
  active
}) =>
  <CenteredButtonGroup
    className="btn-group btn-group-toggle"
    data-toggle="buttons">
    {
      items.map((item, i) => {
        const activeClass = active === item ? 'active' : '';
        const label = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

        return (
          <label
            key={i}
            className={`btn btn-secondary ${activeClass}`}
          >
          <input
            id={item}
            onChange={handler}
            type="checkbox"
            checked
            autoComplete="off"
          />
          <span className="label">{label}</span>
          </label>
        )
      })
    }
  </CenteredButtonGroup>

export default ButtonGroup;


