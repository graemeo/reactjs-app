import sinon from 'sinon';
import proxyquire from 'proxyquire';

describe('Pokemon service', function() {
   it('should return something', function() {
      var config = {
         pokemon: {
            api: {
               url: ''
            }
         }
      };

      var stub = sinon.stub();

      stub.returns(Promise.resolve('{}'));

      var client = proxyquire('../services/pokemon-service', {
         'request-promise': stub,
         'config': config
      });
 
      return client.getPokemons()
         .then(function(res){
            console.log(res);
         });
   });
});
