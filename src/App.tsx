import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Aside from "@components/Aside.tsx";
import Main from "@components/Main.tsx";
import { useState } from "React";

function App() {
  const [asideActive, setAsideActive] = useState<boolean>(false);

  return (
    <div className={`bg-[#020202]/60 overflow-hidden h-screen`}>
      <div className="bg-gradient-to-b from-transparent to-[#020202] absolute w-[100vw] gra h-[50vh] -z-10"></div>
      <div className="bg-[url('images/background-img.webp')] bg-cover bg-center w-[100vw] gra h-[50vh] absolute -z-20 top-0 left-0 bg-no-repeat"></div>
      <Navbar setAsideActive={setAsideActive} />
      <Aside asideActive={asideActive} />
      <Routes>
        <Route path="/" element={<Main asideActive={asideActive} />}></Route>
        <Route path="*" element={<p>404 Not Found</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
