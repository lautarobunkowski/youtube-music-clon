import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Aside from "@components/Aside.tsx";
import Main from "@components/Main.tsx";
import Library from "@pages/Library.tsx";
import Home from "@pages/Home.tsx";
import Playlist from "@pages/Playlist";
import Channel from "@pages/Channel";
import Album from "@pages/Album";
import Player from "@/components/Player";
import { useState } from "React";

function App() {
  const [asideActive, setAsideActive] = useState<boolean>(false);

  return (
    <div className={`bg-[#020202]/60 overflow-hidden h-screen`}>
      <div className="bg-gradient-to-b from-transparent to-[#020202] absolute w-[100vw] gra h-[50vh] -z-10"></div>
      <div className="bg-[url('images/background-img.webp')] bg-cover bg-center w-[100vw] h-[50vh] absolute -z-20 top-0 left-0 bg-no-repeat"></div>
      <Navbar setAsideActive={setAsideActive} asideActive={asideActive} />
      <Aside asideActive={asideActive} />
      <Main asideActive={asideActive}>
        <Routes>
          <Route path="/channel/:id" element={<Channel />}></Route>
          <Route path="/album" element={<Album />}></Route>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Main>
      <Player />
    </div>
  );
}

export default App;
