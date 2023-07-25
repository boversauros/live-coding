import { Switch, Route, Link } from "wouter";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/character/:id">
        {(params) => <Character characterId={params.id} />}
      </Route>
      <Route path="/:rest*">
        {(params) => (
          <>
            <p>404, Sorry the page ${params.rest} does not exist!</p>
            <Link href="/">Go Back</Link>
          </>
        )}
      </Route>
    </Switch>
  );
}

export default App;
