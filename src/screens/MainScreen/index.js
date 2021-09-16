import { Switch, Route, Redirect } from "react-router-dom";
import PokedexView from "../../components/PokedexView";
import withRouter from "../../HOC";
import generations from "../../constants";
import "./MainScreen.css";

function App() {
  return (
    <div className="pokedex-app">
      <h1>Pokedex</h1>

      <Switch>
        <Route exact path="/">
          <Redirect to={generations[0].link} />
        </Route>

        {generations.map((gen, i) => (
          <Route key={i} exact path={"/" + gen.link}>
            <PokedexView generation={gen} />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default withRouter(App);
