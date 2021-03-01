import initialState from '../initialState';
// редьюсер диспатча
export default function treeListChanger(state = initialState.treeListContent, action) {
  if (action.type === 'CHANGELIST') {
    return [
      action.content
    ];
  }
  return state;
}