import React from 'react';

import testData from 'testData'
import TableRow from 'components/Table/tableRow/TableRow'

const Table = () => {
  let table = testData.map((el) => {
    return (
      <TableRow name={el.name} date={el.date} days={el.days} mission={el.mission} multi={el.isMultiple}>
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