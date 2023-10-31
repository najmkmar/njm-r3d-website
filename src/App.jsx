import Home from "./Home";
import Chat from "./Chat";
import Generate from "./Generate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </>
  );
}

export default App;
