
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Icon from "./components/Icon";

import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";

export default function App() {

  const path = "/01";

  return (
    <> {/* jsx fragment */}
      <header>
        <Logo/>
      </header>
      <main id="deneme">
        <CurrentPage pageNumber= {path}/>
        
      </main>
      <footer>F</footer>
    </>);
}

function CurrentPage({pageNumber}) {

  console.log(pageNumber);
  return pageNumber === "/01" ? <Page01/> : pageNumber === "/02" ? <Page02/> : pageNumber === "/03" ? <Page03/> : <Page04/>
}




