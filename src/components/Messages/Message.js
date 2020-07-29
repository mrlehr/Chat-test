import React from 'react';


const Message = ({ messages }) => {

  return (
   <p className="user-message">
    { messages }
   </p>
   )
  
};

export default Message;
