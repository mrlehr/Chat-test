import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Connexion = () => {

  const [pseudo, setPseudo] = useState('');
  const [goToChat, setGoToChat] = useState(false);

  const handleChange = (evt) => {
    setPseudo(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setGoToChat(true)
  }

  if (goToChat) {
    return <Redirect push to={`/pseudo/${pseudo}`} ></Redirect>
  }

  return (
   <div className="connexionBox">
     <form className="connexion" onSubmit={handleSubmit} >
       <input 
          value={pseudo}
          onChange={handleChange}
          type="text"
          placeholder="Pseudo"
          required
          />
          <button type="submit" >GO</button>
     </form>
   </div>
  );
};

export default Connexion;
