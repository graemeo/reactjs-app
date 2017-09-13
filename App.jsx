import React from 'react';
import About from './components/About.jsx';
import Greeter from './components/Greeter.jsx';
import {getPokemons} from './services/pokemon-service';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         pokemons: {
            count: '',
            list: []
         }
      };
   }

   componentDidMount() {
      var self = this;
      getPokemons()
         .then(function(result) {
             self.setState({
                pokemons: {
                   count: result.count,
                   list: result.results
                }
             });
          });
   }

   render() {
      return (
         <div>
            {this.state.pokemons.list.map((pokemon, index) =>
               <li key={index}>{pokemon.name}</li>
            )}

            <About />
         </div>
      );
   }
}

export default App;
