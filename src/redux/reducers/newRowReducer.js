export const newRowReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_ROW':
      state.newItem.name = action.name
      state.newItem.date = action.date
      state.newItem.days = action.days
      state.newItem.mission = action.mission
      state.newItem.isMultiple = action.isMultiple
      
      state.dataList.push(state.newItem)
      
      break
    default:
      break
  }
  return state;
}