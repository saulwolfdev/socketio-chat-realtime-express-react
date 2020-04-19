import React from 'react';
import "./Input.scss";
const Input = ({setMessage, sendMessage, message}) =>(

          <form className="form">
            <input
              className="input"
              type="text"
              placeholder="Llama a la Manada..."
              value={message}
              onChange={({target:{value }}) => setMessage(value)}
              onKeyPress={(event) =>event.key === "Enter" ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={(e)=> sendMessage(e)}>AULLAR</button>
          </form>
 
    );

 
export default Input;