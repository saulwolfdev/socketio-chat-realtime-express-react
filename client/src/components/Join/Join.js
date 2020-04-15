import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.scss";
const Join = () => {
  const { name, setName } = useState("");
  const { room, setRoom } = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="heading">
          <div>
            <input
              type="text"
              className="joinInput"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="joinInput mt-20"
              placeholder="room"
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.prevetDefault() : null)}
            to={`/chat?name${name}&${room}`}
          >
            <button type="submit mt-20" className="button">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
