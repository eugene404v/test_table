import React from 'react';
import {newRowActionCreator} from 'utils/actionCreators'

const TableCreate = (props) => {
  const nameInput = React.createRef();
  const dateInput = React.createRef();
  const daysInput = React.createRef();
  const missionInput = React.createRef();
  const multiInput = React.createRef();

  const formHandler = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const date = dateInput.current.value;
    const days = daysInput.current.value;
    const mission = missionInput.current.value;
    props.dispatch(newRowActionCreator(name, date, days, mission));
    nameInput.current.value = "";
    dateInput.current.value = "";
    daysInput.current.value = "";
    missionInput.current.value = "";
  }

  return (
    <div>
      <form action="" onSubmit={formHandler}>
        <input type="text" ref={nameInput}></input>
        <input type="date" ref={dateInput}></input>
        <input type="text" ref={daysInput}></input>
        <input type="text" ref={missionInput}></input>
        <input type="submit" value="submit" />
      </form>

    </div>
  )
}

export default TableCreate;