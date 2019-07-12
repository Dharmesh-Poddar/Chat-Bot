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
            {
                
            }

             
          
          </div>
      );


      }

}
export default MessageList;
