import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Tab extends React.Component {
  render() {
    const { value, index } = this.props;
    return (
      <Draggable draggableId={value} index={index}>
        {(provided, snapshot) => (
          <div>
            <div
              className="Tab"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {value}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Tab;
