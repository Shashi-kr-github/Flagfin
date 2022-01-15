import Countries from "./components/Countries";
import Header from "./components/header";
import Filter from "./components/Filter";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/">
        <Filter />
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
