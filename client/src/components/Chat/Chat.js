// import React from 'react';

import React, { useState, useEffect } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import "./Chat.scss";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
   
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = querystring.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});
    
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    
  }, [ENDPOINT, location.search]);

  
  
  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log("===>>",message, messages);
  console.log("===>>",name,room)
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        <Messages messages={messages}/>
      </div>
    </div>
  );
};

export default Chat;
