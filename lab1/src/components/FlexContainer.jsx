import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';

function FlexContainer({ element: Element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="container-people">
      {items.map(item => (
        <Element
          key={item.id}
          person={item}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default FlexContainer;
