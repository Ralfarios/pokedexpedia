import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      <div id="App">
        <Navbar />
        <Bottombar />

        <Switch>
          <Route exact path={path.pokemonType}>
            <PokemonType />
          </Route>
          <Route exact path={path.pokemonList}>
            <Redirect to={{ pathname: '/page/1' }} />
          </Route>
          <Route exact path={path.pokemonSearch}>
            <PokemonSearch />
          </Route>
          <Route exact path={path.pokemonAbilities}>
            <PokemonDetail />
          </Route>
          <Route exact path={path.pokemonStat}>
            <PokemonDetail />
          </Route>
          <Route exact path={path.pokemonDetail}>
            <PokemonDetail />
          </Route>
          <Route exact path={path.pokemonMove}>
            <PokemonDetail />
          </Route>
          <Route exact path={path.myPokemonList}>
            <MyPokemonList />
          </Route>
          <Route exact path={path.notFound}>
            <NotFound />
          </Route>
          <Route exact path={path.pokemonListPagination}>
            <PokemonList />
          </Route>
          <Route path={path.placeholder}>
            <Redirect to={{ pathname: path.notFound }} />
          </Route>
        </Switch>
      </div >
    </HelmetProvider>
  );
}
