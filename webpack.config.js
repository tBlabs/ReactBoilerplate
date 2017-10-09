const path = require('path');

module.exports = 
{
  entry: 
  {
    src: './src/index.tsx',
    react: ['react', 'react-dom'] 
  },
  output: 
  {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: 
  {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: 
  {
    extensions: [ ".tsx", ".ts", ".js" ],
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './src/components')
    ]
  },
  // externals: 
  // {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // },
  devServer:
  {
     contentBase: [ 
       path.join(__dirname, "dist")
     ]
  }
};