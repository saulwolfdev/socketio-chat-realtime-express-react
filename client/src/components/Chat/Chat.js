// import React from 'react';

import React, {useState, useEffect} from 'react';
import querystring from "query-string";
import io from "socket.io-client";
import "./Chat.scss";
import InfoBar from "../InfoBar/InfoBar";
let socket;

const Chat = ({location}) => {
      const [name, setName] = useState("");
      const [room, setRoom] = useState("");
      
      const [message, setMessage] = useState("");
       const [messages, setMessages] = useState([]);
      
const ENDPOINT = "localhost:5000";
    useEffect(()=>{
        const {name, room} = querystring.parse(location.search);
        
        socket=io(ENDPOINT);
        
        setName(name);
        setRoom(room);
        
        socket.emit("join",{name,room},()=>{
            
        });
        return()=>{
            socket.emit("disconnect");
            socket.off()
        }
        
        
    },[ENDPOINT,location.search]);
    
    useEffect(()=>{
        socket.on("message",(message)=>{
            setMessages([...messages,message])
        })
    },[messages])

    const sendMessage=(e)=>{
        e.preventDefault()
        if(message){
            socket.emit("sendMessage",message,()=>sendMessage(""))
        }
    }
    console.log(message,messages);
    return (
      <div className="outerContainer">
        <div className="container">
          <h1>CHAT</h1>
          
          <InfoBar room={room}/>
          {/* <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            onKeyPress={e=>e.key=="Enter"? setMessage(e):null}
          /> */}
        </div>
      </div>
    );
}
 
export default Chat;