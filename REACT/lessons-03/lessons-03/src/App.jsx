
import { useState } from "react";
import { Icon } from "./components/Icon";
import { MainLogo } from "./components/Logo.jsx";
import { MainNav } from "./components/Nav.jsx";
import { NavLink } from "./components/Nav.jsx";
import Page01 from "./Pages/Page01.jsx";
import Page02 from "./Pages/Page02.jsx";


function App() {
  const [path, setPath] = useState("/01");

  

  function changePath(to) {

    console.log(to);
    setPath(to);


  }

  // changePath fonksiyonunu NavLink öğelerine geçirebilir misiniz.

  return (
      <>
        <header>
          <MainLogo/>
          <MainNav clickFunc={changePath}/>
        </header>
        <main>
          {path==="/01" && <Page01/>}
          {path==="/02" && <Page02/>}
        </main>
        <footer>F</footer>
      </>
    );
}


export default App;