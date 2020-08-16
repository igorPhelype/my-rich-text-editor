import React from 'react';
import './App.css';
import { MyTextEditor } from './components';
/*
Error: `Node.assertNode` could not find node with path or key: 
List [ Text { key: "2", marks: Set {}, text: "Hello W" }, List [ 0, 0 ] ]
*/
function App() {
  return (
    <>
      <nav className="Header">
        <div className="logo"><img alt="logo" src="logo.png" /></div>
      </nav>
      <div className="App-body">
        <div className="container">
          <span className={'small-text'}>Please,</span>
          <span className={'big-text'}>Write something...</span>
          <MyTextEditor />
        </div>
      </div>
    </>
  );
}

export default App;