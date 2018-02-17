import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import './Tabs.css';

const Tab = SortableElement(({ value }) => <div className="Tab">{value}</div>);

const SortableTabs = SortableContainer(({ items }) => (
  <div className="Tabs">
    {items.map(({ value }, index) => <Tab key={`item-${value}`} index={index} value={value} />)}
  </div>
));

class Tabs extends React.Component {
  componentWillMount() {
    this.setState({
      items: this.props.items,
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const items = arrayMove(this.state.items, oldIndex, newIndex);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    return (
      <SortableTabs
        axis="x"
        distance={5}
        items={items}
        onSortEnd={this.onSortEnd}
        {...this.props}
      />
    );
  }
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { Tab };
export default Tabs;
