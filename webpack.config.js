var config = {
   entry: './main.js',
   
   output: {
      filename: 'index.js'
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
   }
}

module.exports = config;
