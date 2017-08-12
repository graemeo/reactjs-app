import React from 'react';
import About from './components/About.jsx';
import Greeter from './components/Greeter.jsx';
import {getPokemons} from './services/pokemon-service';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         pokemons: []
      };
   }

   componentDidMount() {
      var self = this;
      getPokemons()
         .then(function(result) {
             self.setState({
                pokemons: result
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
