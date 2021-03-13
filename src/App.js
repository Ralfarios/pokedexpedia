import { Switch, Route, Redirect } from 'react-router-dom';

import { Bottombar } from './components/layout/Bottombar';
import { Navbar } from './components/layout/Navbar';
import { path } from './routers/path';
import {
  PokemonList,
  PokemonDetail,
  MyPokemonList,
  NotFound,
  PokemonSearch,
  PokemonType
} from './pages/index';

export const App = _ => {
  return (
    <div id="App">
      <Navbar />
      <Bottombar />

      <Switch>
        <Route exact path={path.pokemonType}>
          <PokemonType />
        </Route>
        <Route exact path={path.pokemonList}>
          <PokemonList />
        </Route>
        <Route exact path={path.pokemonSearch}>
          <PokemonSearch />
        </Route>
        <Route exact path={path.pokemonDetail}>
          <PokemonDetail />
        </Route>
        <Route exact path={path.myPokemonList}>
          <MyPokemonList />
        </Route>
        <Route exact path={path.notFound}>
          <NotFound />
        </Route>
        <Route path={path.placeholder}>
          <Redirect to={{ pathname: path.notFound }} />
        </Route>
      </Switch>
    </div >
  );
}
