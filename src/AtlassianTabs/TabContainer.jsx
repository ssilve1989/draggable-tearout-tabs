import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Tab from './Tab';
import './styles.css';

class TabContainer extends React.Component {
  renderTab = (props, index) => <Tab key={index} {...props} index={index} />;

  render() {
    const { tabs } = this.props;

    return (
      <Droppable droppableId="droppable" direction="horizontal">
        {provided => (
          <div className="Tabs" ref={provided.innerRef}>
            {tabs.map(this.renderTab)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TabContainer;
