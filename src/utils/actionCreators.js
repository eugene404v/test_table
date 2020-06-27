export const removeRowActionCreator = (btn) => {
  return {
    type: "REMOVE_ROW",
    searchItem: btn.current.id
  }
}

export const newRowActionCreator = (name, date, days, mission) => {
  return {
    type: "NEW_ROW",
    name: name,
    date: date,
    days: days,
    mission: mission
  }
}