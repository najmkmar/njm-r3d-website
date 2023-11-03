import Home from "./Home";
import Chat from "./pages/Chat";
import Generate from "./pages/Generate";
import Play from "./pages/Play"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
