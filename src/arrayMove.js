export default (list, { oldIndex, newIndex }) => {
  const [removed] = list.splice(oldIndex, 1);
  list.splice(newIndex, 0, removed);
  return list;
};
