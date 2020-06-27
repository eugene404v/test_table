export const removeRowReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ROW':
      const requiredItem = state.dataList.findIndex(item => item.name === action.searchItem)
      state.dataList.splice(requiredItem, 1)
      
      break
    default:
      break
  }
  return state;
}