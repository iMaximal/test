var webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: __dirname + '/public',
    // path: path.resolve(__dirname, '/public'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'bundle.js', // string
    // the filename template for entry chunks

   },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]


};