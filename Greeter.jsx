import React from 'react';

class Greeter extends React.Component {
   render() {
      let greeting = '';
      const whoAreYou = this.props.name;
      if (whoAreYou && whoAreYou.length > 2) {
         greeting = 'Hello, ' + whoAreYou;
      }
      
      return(
            <div>{greeting}</div>
      );
   }
}

export default Greeter;
