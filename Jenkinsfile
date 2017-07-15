def buildSlave = 'build-slave'

stage('Build') {
   node (buildSlave) {
      timestamps {
         sh '''
            rm -rf reactjs-app
            git clone https://github.com/graemeo/reactjs-app.git
            
            cd reactjs-app
            
            npm install
            npm test
         '''
      }
   }
}


