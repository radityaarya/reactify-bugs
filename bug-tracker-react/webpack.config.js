module.exports = {
  entry : [
    './src/index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  
  output: {
    filename : "public/bundle.js"
  },

  module : {
    rules : [
      {
        test : /\.jsx?$/,
        loader : 'babel-loader'
      }
    ]
  }
}
