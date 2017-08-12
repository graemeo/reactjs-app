const path = require('path');

var config = {
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
  }
}

module.exports = config;
