import Logo from "./components/Logo";
import Nav from "./components/Nav";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";

export default function App() {
  const path = "/02";

  return (
    <>

      <header>
        <Logo content="Boost Kd-18" to="#"/>

        <Nav/>

      </header>
      <main>
        {path === "/01" && <Page01/>}
        {path === "/02" && <Page02/>}
      </main>
      <footer>
        F
      </footer>


    </>
  );
}


