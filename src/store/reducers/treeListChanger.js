import initialState from '../initialState';

export default function treeListChanger(state = initialState.treeListContent, action) {
  if (action.type === 'CHANGELIST') {
  //state = [];
    return [
      action.content
    ];
  }
  return state;
}