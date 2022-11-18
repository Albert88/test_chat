import React from "react";
import axios from "axios";

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert("Please enter valid value");
    }
    const obj = {
      roomId,
      userName,
    };
    setIsLoading(true);
    await axios.post("http://localhost:9999/rooms", obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        disabled={isLoading}
        onClick={onEnter}
        className="btn btn-success"
      >
        {isLoading ? "Sign..." : "Join"}
      </button>
    </div>
  );
}

export default JoinBlock;
