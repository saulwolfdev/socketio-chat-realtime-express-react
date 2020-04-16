// import React from 'react';

import React, {useState, useEffect} from 'react';
import querystring from "query-string";
import io from "socket.io-client";
import "./Chat.scss";
const Chat = ({location}) => {
      const [name, setName] = useState("");
      const [room, setRoom] = useState("");
    useEffect(()=>{
        const {name, room} = querystring.parse(location.search)
            
        setName(name);
        setRoom(room);
    })
    return (<div>
       <h1>CHAT</h1>
    </div>);
}
 
export default Chat;