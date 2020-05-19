import React from 'react';
import logo from './logo.svg';
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
        <div className="logo"><img src="logo.png" /></div>
      </nav>
      <div className="App-body">
        <MyTextEditor />
      </div>
    </>
  );
}

export default App;