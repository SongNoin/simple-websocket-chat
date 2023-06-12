import io from "socket.io-client";
import "./App.css";
import { useState } from "react";

function App() {
  const socket = io("http://localhost:3000");
  const [requestText, setRequestText] = useState("");

  socket.on("test", (socket) => {
    console.log("소켓", socket);
  });

  const handleRequestSocket = () => {
    socket.emit("test", {
      data: requestText,
    });
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRequestText(e.target.value);
  }

  return (
    <div>
      소켓 연결 테스트
      <button onClick={handleRequestSocket}>Request</button>
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default App;
