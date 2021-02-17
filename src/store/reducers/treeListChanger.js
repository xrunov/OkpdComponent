import initialState from '../initialState';

export default function treeListChanger(state = initialState.treeListContent, action) {
  if (action.type === 'ChangeList') {
    return [
      action.payload
    ];
  }
  return state;
}