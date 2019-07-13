import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chatkit from '@pusher/Chatkit';
import {tokenUrl ,instanceLocator} from './config';

import './App.css';
import Message from './Components/Message';
import MessageList from './Components/MessageList';
import NewRoomForm from './Components/NewRoomForm';
import RoomList from  './Components/RoomList';
import SendMessageForm from './Components/SendMessageForm';


class App extends React.Component{

  componentDidMount(){
      
     const chatManager =new Chatkit.ChatManager(
        {
          instanceLocator,
          userId:'gojek',
          tokenProvider: new Chatkit.tokenProvider(
            {
              url:tokenUrl

            }
          )
        }

     )
     

  }

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

