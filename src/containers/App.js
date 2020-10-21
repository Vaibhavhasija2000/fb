import React, { Component } from 'react';
import Header from '../components/Header/Header';
import classes from './App.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Login from '../components/Login/Login';
import {useStateValue} from '../components/StateProvider';
function App() {
  const [{ user },dispatch] = useStateValue();
  return( 
    <div className={classes.app}>
      
        {!user ?
        (
        <h1><Login /></h1>
        ) : (
          <div>
          <Header />
          <div className={classes.app__body}>
          <Sidebar />
          <Feed />
          <Widgets />
         </div>
         </div>
        )}
       

      
    </div>
  );
}

export default App;
