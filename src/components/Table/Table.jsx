import React from 'react';

import TableRow from 'components/Table/tableRow/TableRow'


const Table = (props) => {
  let table = props.state.dataList.map((el) => {
    return (
      <TableRow name={el.name} date={el.date} days={el.days} mission={el.mission} multi={el.isMultiple} dispatch={props.dispatch}>
      </TableRow>
    )
  })


  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Duration</th>
          <th scope="col">Mission</th>
          <th scope="col">Multiple</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {table}
      </tbody>
    </table>
  )
}

export default Table;