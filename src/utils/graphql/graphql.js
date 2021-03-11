import { ApolloClient, InMemoryCache } from '@apollo/client';
import { myPokemonListVar } from './cache';

const uri = 'https://graphql-pokeapi.vercel.app/api/graphql';

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          myPokemonList: {
            read () { return myPokemonListVar() }
          }
        }
      }
    }
  })
});
