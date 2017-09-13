import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import {getPokemons} from '../services/pokemon-service';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
   paper: {
      margin:20
   }
};

class Main extends React.Component {
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
      return(
         <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
               <Paper zDepth={2} style={ styles.paper }>
                  <GridList cols={5} cellHeight={50}>
                      <Subheader> List of Pokemons </Subheader>
                      {this.state.pokemons.list.map((pokemon, index) =>
                         <GridTile key={index} title={pokemon.name}/>
                      )}
                  </GridList>
                  <br/>
               </Paper>
            </div>

         </MuiThemeProvider>
      );
   }
}

export default Main;
