import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="chat" Component={ChatPage} />
      <Route />
    </Routes>
  );
}

export default App;
