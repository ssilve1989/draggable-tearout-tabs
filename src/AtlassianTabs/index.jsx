import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import TabContainer from './TabContainer';
import arrayMove from '../arrayMove';

class SortableTabs extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          value: 'Tab 1',
        },
        {
          value: 'Tab 2',
        },
        {
          value: 'Tab 3',
        },
      ],
    };
  }

  onDragEnd = result => {
    const { destination, source } = result;
    console.debug(result);

    if (!destination) {
      console.log('Tear out the window');
      const { index } = source;
      this.createTearoutWindows(window.fin, index, index);

      return;
    }

    const items = arrayMove(this.state.items, {
      oldIndex: source.index,
      newIndex: destination.index,
    });

    this.setState({ items });
  };

  createTearoutWindows = (fin, name, yPosition) => {
    const target = `http://localhost:3000/#/tearout/${name}`;
    if (fin) {
      const tearout = new fin.desktop.Window({
        name: `tearout-${name}`,
        alwaysOnTop: true,
        defaultWidth: '500',
        defaultheight: '500',
        defaultTop: 10 + yPosition * 80,
        autoShow: true,
        url: target, // this must be a valid url or about:blank,
        resizable: true,
        maximizable: true,
        saveWindowState: false,
        showTaskbarIcon: false,
      });

      tearout.show();
      tearout.bringToFront();
      return;
    }

    window.open(target);
  };

  render() {
    const { items } = this.state;
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <TabContainer tabs={items} />
      </DragDropContext>
    );
  }
}

export default SortableTabs;
