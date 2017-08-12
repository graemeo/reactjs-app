const path = require('path');
const config = require('config');
const fs = require('fs');

fs.writeFileSync(path.resolve(__dirname, 'config/client.json'), JSON.stringify(config))

var configuration = {
   entry: './main.js',
   
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist')
   },
   
   devServer: {
      inline: true,
      port: 8282,
      host: '0.0.0.0',
      disableHostCheck: true
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },

   node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
  },

  resolve: {
     alias: {
        config: path.resolve(__dirname, 'config/client.json')
     }
  }
}

module.exports = configuration;
