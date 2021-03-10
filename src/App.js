import { Switch, Route } from 'react-router-dom';

import { path } from './routers/path';
import {
  PokemonList,
  PokemonDetail,
  MyPokemonList,
  NotFound
} from './pages/index';

export const App = _ => {
  return (
    <div id="App">

      <Switch>
        <Route exact path={path.pokemonList}>
          <PokemonList />
        </Route>
        <Route exact path={path.pokemonDetail}>
          <PokemonDetail />
        </Route>
        <Route exact path={path.myPokemonList}>
          <MyPokemonList />
        </Route>
        <Route path={path.notFound}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
