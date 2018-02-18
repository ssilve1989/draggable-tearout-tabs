import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Tab from './Tab';
import './styles.css';

class TabContainer extends React.Component {
  renderTab = (props, index) => <Tab key={index} index={index} {...props} />;

  render() {
    const { tabs } = this.props;

    return (
      <Droppable droppableId="droppable" direction="horizontal">
        {provided => (
          <div className="Atlassian-Tabs" ref={provided.innerRef}>
            {tabs.map(this.renderTab)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TabContainer;
