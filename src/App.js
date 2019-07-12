import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Message from './Components/Message';
import MessageList from './Components/MessageList';
import NewRoomForm from './Components/NewRoomForm';
import RoomList from  './Components/RoomList';
import SendMessageForm from './Components/SendMessageForm';


class App extends React.Component{

   render(){

    return(
      
      <div className="app">
          
          <RoomList />
          <MessageList />
          <SendMessageForm />
          <NewRoomForm />


         
      </div>



    );

   }

}


export default App;

