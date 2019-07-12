import React ,{Component} from 'react';

const Dummy_data =[
    
     {
       senderID :'Dharmesh',
       text: 'studying in lnmiit at jaipur'


     },

     {
         senderID: 'Preet Jain',
         text :'studies mechanical'

     },

     {
         senderID:'Rohit sharma',
         text: 'studies electrical'

     }




];


class MessageList extends React.Component{
   render()
      {
      return(
          <div className="messagelist">
            {Dummy_data.map(function(message,index){
               
               return (
                   <div key= {index} className="message" >
                   <div className="message-username"> {message.senderID}</div>
                   <div className="message-text"> {message.text} </div>
                   
                      </div> 
                       );

                   
            })
            }

             
          
          </div>
      );


      }

}
export default MessageList;
