import ProgressItem from './ProgressItem';
import React from 'react';
import Row from './Row';

function Progress({currentIndex, items, onItemClick}) {
  return (
    <Row>
      {items.map(({disabled, id, isCompleted, title}, index) => {
        return (
          <ProgressItem
            disabled={disabled}
            id={id}
            isActive={currentIndex === index}
            isCompleted={isCompleted}
            key={id}
            onClick={() => onItemClick(index)}
            title={title}
          />
        );
      })}
    </Row>
  );
}

export default Progress;
