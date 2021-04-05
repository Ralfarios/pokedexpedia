# Pokédexpedia

Welcome to Pokédexpedia web application, where you can see detailed information about your favorite Pokémon. 

## Demo
For the demo, we use Firebase for hosting this web app.
https://thepokedexpedia.web.app/

## Features
This Web application has a features:
 - See all Pokémons *(Not particular or by its type)*
 - Search for Pokémon by name
 - See detailed spec of Pokémon *(Name, Height, Weight, Types, Base Stats, Abilities and Moves)*
 - Catch them *(50% probability of success)*
 - Rename, and release from your Pokédex

## Developer?
You too can help me to improve this web application by reporting or fixing the bugs, refactor the code, optimize the performance, etc.

### How?
Just Clone this repo, run `$ npm install` on repo dir, and good to go!
check http://localhost:3000/ for development.

## Endpoints
| Route                             | Description                            |
| --------------------------------- | -------------------------------------- |
| `/page/${pagenumber}`             | See all Pokémons                       |
| `/type/${pokemontype}`            | See all Pokemons by its type           |
| `/pokemon/${pokemonid}/info`      | See the detailed Pokémon info          |
| `/pokemon/${pokemonid}/stat`      | See the detailed Pokémon Base Stat     |
| `/pokemon/${pokemonid}/abilities` | See the detailed Pokémon Abilities     |
| `/pokemon/${pokemonid}/move`      | See the detailed Pokémon Moves         |
| `/pokemon/mypokemon`              | See your Pokédex                       |

## Tech Stack and Package Used
For this web application we are using:
 - [React](https://reactjs.org/) 
 - [Emotion](https://emotion.sh/docs/introduction)
 - [Bootstrap V5](https://getbootstrap.com/)
 - [Lodash](https://lodash.com/)
 - [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
 - [React Icons](https://react-icons.github.io/react-icons/)
 - [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton)
 - [React Lottie](https://www.npmjs.com/package/react-lottie)
 - [React Redux](https://react-redux.js.org/)
 - [React Router DOM](https://reactrouter.com/web/guides/quick-start)
 - [Redux](https://redux.js.org/)
 - [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
 - [SweetAlert2](https://sweetalert2.github.io/)

## Credit
- Code with ❤ by [Ralfarios (Muamar Al Farabi)](https://github.com/Ralfarios)
- For API, thanks to https://pokeapi.co/ for providing me a descent Pokémon API
- For UI Inspiration, thanks to [Saepul Nahwan @dribbble](https://dribbble.com/shots/6545819-Pokedex-App/attachments/6545819-Pokedex-App?mode=media)
