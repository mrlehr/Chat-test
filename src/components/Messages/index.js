import React, { useState, useEffect } from 'react';
import Formulaire from '../Formulaire';
import Message from '../Messages/Message'
import { v4 } from 'uuid';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';


// import base from '../../base';

// firebase.firestore().collection('times').add({
//   title: 'Rubik Cube',
//   time: 45,
// });

const Messages = (props) => {

  const [pseudo, setpseudo] = useState('');
  const [allMessage, setAllMessage] = useState ([
    {
      pseudo: props.match.params.pseudo,
      messages: 'Entre le premier message',
    }]);
    
  
  const addMessage = (message) => {
  
    setAllMessage([
      ...allMessage,
      {
        messages: message,
        pseudo: props.match.params.pseudo,
      }
    ]);
    
  };


  return (
   <div className="box">
     <div>
      <div className="messages"  >
         <TransitionGroup className="message">
           {
             allMessage.map((key) => (
              
              <Message 
                key={v4()}
                pseudo={key.pseudo}
                messages={key.messages}
                 />
             ))
             
           }

         </TransitionGroup>
       </div>
     </div>
     <Formulaire
      length={140}
      pseudo={pseudo}
      addMessage={addMessage}
      />
   </div>
  );
};

export default Messages;
