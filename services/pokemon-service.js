import request from 'request-promise';

export function getPokemons() {
   return request('http://www.pokeapi.co/api/v2/pokemon')
      .then(function(resp) {
         return resp;
      })
      .catch(function(err) {
         return "not found";
      });
}

