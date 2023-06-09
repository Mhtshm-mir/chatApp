import React from "react";
import axios from "axios";
function ChatPage() {
  const fetchChats = async () => {
    const data = await axios.get("http:localhost:5000/api/chat");
    console.log(data);
  };

  return <div>chatpage</div>;
}

export default ChatPage;
