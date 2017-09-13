import request from 'request-promise';
import config from 'config';

export function getPokemons() {
   var url = config.pokemon.api.url;
   return request(url + '/api/v2/pokemon')
      .then(function(resp) {
         return JSON.parse(resp);
      })
      .catch(function(err) {
         return "not found";
      });
}

