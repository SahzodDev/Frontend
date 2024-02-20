
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Icon from "./components/Icon";

import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";

export default function App() {
  return (
    <> {/* jsx fragment */}
      <header>
        <Logo/>
      </header>
      <main id="deneme">
        <Page01/>

        <Page02/>
        
      </main>
      <footer>F</footer>
    </>);
}




