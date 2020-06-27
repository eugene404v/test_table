import React from 'react';
import dateChanger from 'utils/dateChanger';
import multiplier from 'utils/multiplier';
import {removeRowActionCreator} from 'utils/actionCreators'


const TableRow = (props) => {
  const delBtn = React.createRef();

  const deleteHandler = () => {
    props.dispatch(removeRowActionCreator(delBtn))
  }

 return (<tr>
   <td>{props.name}</td>
   <td>{dateChanger(props.date)}</td>
   <td>{props.days}</td>
   <td>{props.mission}</td>
   <td>{multiplier(props.multi)}</td>
   <td><button id={props.name} onClick={deleteHandler} ref={delBtn}>delete</button></td>
 </tr>)
}

export default TableRow;