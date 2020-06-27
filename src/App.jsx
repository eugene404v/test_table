import React from 'react';

import Content from 'components/Content/Content'
import SideBar from 'components/SideBar/SideBar'

function App(props) {
  return (
  <div className="App">
    <SideBar></SideBar>
    <Content state={props.state} dispatch={props.dispatch}></Content>
  </div> 
  )
}

export default App;