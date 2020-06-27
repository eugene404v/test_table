import React from 'react';
import dateChanger from 'utils/dateChanger';
import multiplier from 'utils/multiplier';

const TableRow = (props) => {
 return (<tr>
   <td>{props.name}</td>
   <td>{dateChanger(props.date)}</td>
   <td>{props.days}</td>
   <td>{props.mission}</td>
   <td>{multiplier(props.multi)}</td>
 </tr>)
}

export default TableRow;