import React from 'react';


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
         <fieldset>
            <legend>About Yourself</legend>
            <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange} />
         </fieldset>
      );
   }
}

export default About;
