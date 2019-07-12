import React from 'react';

import './App.css';
import './Components/Message';
import './Components/MessageList';
import './Components/NewRoomForm';
import './Components/RoomList';
import './Components/SendMessageForm';


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

