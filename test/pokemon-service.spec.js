import sinon from 'sinon';
import proxyquire from 'proxyquire';
import {expect} from 'chai';

describe('Pokemon service', function() {
  var config = {
     pokemon: {
        api: {
           url: ''
        }
     }
  };

  it('should return successful response when calling Pokemon API to get a list of Pokemon is successful', function() {
      var stub = sinon.stub();

      stub.returns(Promise.resolve('{"count": 1, "result": "bla"}'));

      var client = proxyquire('../services/pokemon-service', {
         'request-promise': stub,
         'config': config
      });
 
      return client.getPokemons()
         .then(function(response) {
            expect(response.count).to.equal(1);
            expect(response.result).to.equal("bla");
         });
   });

   it('should return meaningful error message when calling Pokemon API to get a list of Pokemon fails', function() {
      var stub = sinon.stub();

      stub.returns(Promise.reject(new Error('I fail!')));
 
      var client = proxyquire('../services/pokemon-service', {
         'request-promise': stub,
         'config': config
      });

      return client.getPokemons()
         .then(function(response) {
            expect(response).to.equal('not found');
         });
   });
});
