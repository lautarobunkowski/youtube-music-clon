import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Aside from "@components/Aside.tsx";
import { useState } from "React";

function App() {
  const [asideActive, setAsideActive] = useState<boolean>(false);

  return (
    <div
      className={`bg-[#020202] h-screen grid grid-rows-[65px_1fr] ${
        asideActive ? "grid-cols-[240px_1fr]" : "grid-cols-[75px_1fr]"
      }`}
    >
      <Navbar setAsideActive={setAsideActive} />
      <Aside asideActive={asideActive} />
      <Routes>
        <Route path="/" element={<main></main>}></Route>
        <Route path="*" element={<p>404 Not Found</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
