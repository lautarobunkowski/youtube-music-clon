import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Aside from "@components/Aside.tsx";

function App() {
  return (
    <div className="bg-[#020202] h-screen grid grid-cols-[72px_1fr] grid-rows-[65px_1fr]">
      <Navbar />
      <Aside />
      <Routes>
        <Route path="/" element={<main></main>}></Route>
        <Route path="*" element={<p>404 Not Found</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
