import React from 'react';

import Table from 'components/Table/Table';
import TableCreate from 'components/Table/TableCreate/TableCreate'

const Content = (props) => {
  return (
    <section className="content">
      <h1>Astronauts</h1>
      <Table state={props.state} dispatch={props.dispatch}></Table>
      <TableCreate state={props.state} dispatch={props.dispatch}></TableCreate>
    </section>
  )
}

export default Content;