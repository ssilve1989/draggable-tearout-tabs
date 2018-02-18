import React, { Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Tab extends React.Component {
  onClick = () => console.log('clicked');

  handleOnClick = provided => {
    if (!provided.dragHandleProps) {
      return this.onClick;
    }

    return event => {
      provided.dragHandleProps.onClick(event);
      this.onClick(event);
    };
  };

  render() {
    const { value, index, active } = this.props;
    const className = active ? 'active' : '';

    return (
      <Draggable draggableId={value} index={index}>
        {(provided, snapshot) => (
          <Fragment>
            <div
              onClick={() => console.log(index)}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={this.handleOnClick(provided)}
            >
              <div className={`Atlassian-Tab ${className}`}>
                <span>{value}</span>
              </div>
            </div>
            {provided.placeholder}
          </Fragment>
        )}
      </Draggable>
    );
  }
}
/*
      <Draggable draggableId={value} index={index}>
        {(provided, snapshot) => (
          <Fragment>
            <div
              onClick={() => console.log(index)}
              className="Atlassian-Tab"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {value}
            </div>
            {provided.placeholder}
          </Fragment>
        )}
      </Draggable>
*/
export default Tab;
