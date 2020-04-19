import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.scss";
export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="heading">BIENVENIDO A LA MANADA</div>
        <div>
          <input
            type="text"
            className="joinInput"
            placeholder="Tu nombre"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="joinInput mt-20"
            placeholder="Elegi una Manada"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
          Ingresa
          </button>
        </Link>
      </div>
    </div>
  );
};