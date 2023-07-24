import { Route } from "wouter";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import "./App.css";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/character/:id">
        {(params) => <Character id={params.id} />}
      </Route>
      <Route>404, Not Found!</Route>
    </>
  );
}

export default App;
