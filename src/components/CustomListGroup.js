import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './CustomListGroup.css';

const CustomListGroup = ({ items, activeItem, onItemClick, heading }) => {
  return (
    <div className="list-group">
      <h2 className="list-group-heading">{heading}</h2>
      <ListGroup className="scrollable-list">
        {items.map((item) => (
          <ListGroup.Item
            key={item}
            active={activeItem === item}
            onClick={() => onItemClick(item)}
            className="list-group-item"
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CustomListGroup;
