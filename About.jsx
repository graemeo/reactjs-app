import React from 'react';
import Greeter from './Greeter.jsx';

class About extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name:''
      };
    
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      this.setState({
         name: e.target.value 
      });
   }

   render() {
      return(
         <div>
         <fieldset>
            <legend>About Yourself</legend>
            <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange} />
         </fieldset>
         <Greeter name={this.state.name} />
         </div>
      );
   }
}

export default About;
