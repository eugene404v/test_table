import React from 'react';

import TableRow from 'components/Table/tableRow/TableRow'


const Table = (props) => {
  let table = props.state.map((el) => {
    return (
      <TableRow name={el.name} date={el.date} days={el.days} mission={el.mission} multi={el.isMultiple} dispatch={props.dispatch}>
      </TableRow>
    )
  })


  return (
    <table>
      <tbody>
        {table}
      </tbody>
    </table>
  )
}

export default Table;