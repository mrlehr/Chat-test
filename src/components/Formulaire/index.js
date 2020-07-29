import React, { useState } from 'react';

const Formulaire = ({ addMessage, length }) => {

  const [message, setMessage] = useState('');
  const [maxLenght, setMaxLenght] = useState(140);

  const handeChange = (evt) => {
    setMessage(evt.target.value)
    setMaxLenght(length - message.length)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMessage(message);
    setMessage('');
    setMaxLenght(length);
  };

  const handleKeyUp = (evt) => {
    if (evt.key === 'Enter') {
      handleSubmit(evt)
    }
  }

  return (
   <form 
      className="form"
      onSubmit ={handleSubmit}
   >
    <textarea
      placeholder="Entrez vôtre message"
      required maxlenght='140'
      value={message}
      onChange={handeChange}
      onKeyUp={handleKeyUp}
      />
    <div className="info">
      Nombre de caractères max : {'   '}
        {maxLenght}
    </div>
    <button type='submit' >
      Envoyer
    </button>
   </form>
  );
};

export default Formulaire;
