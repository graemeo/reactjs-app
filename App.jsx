import React from 'react';
import About from './About.jsx';
import Greeter from './Greeter.jsx';

class App extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <About />
         </div>
      );
   }
}

export default App;
