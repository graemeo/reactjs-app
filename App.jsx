import React from 'react';
import About from './components/About.jsx';
import Greeter from './components/Greeter.jsx';
import request from 'request';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         pokemons: []
      };
   }

   componentDidMount() {
      var self = this;

      request('http://www.pokeapi.co/api/v2/pokemon', function(error, response, body) {
         self.setState({
            pokemons: body
         });
      });
   }

   render() {
      return (
         <div>
            <div>{this.state.pokemons}</div>
            <About />
         </div>
      );
   }
}

export default App;
