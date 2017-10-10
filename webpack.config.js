module.exports =
  {
    entry:
    {
      src: './src/index.tsx',
      react: [ 'react', 'react-dom' ]
    },

    output:
    {
      filename: '[name].bundle.js',
      path: __dirname + '/dist'
    },

    module:
    {
      rules:
      [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },

        {
          test: /\.css$/,
          include: __dirname + '/src/components',
          use: [
            'style-loader',
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                localIdentName: '[name]__[local]__[hash:base64:8]'
              }
            }
          ]
        }

      ]
    },

    resolve:
    {
      extensions: [ ".tsx", ".ts", ".js" ],
      modules: [
        __dirname + '/node_modules',
        __dirname + '/src'
      ]
    },

    devServer:
    {
      contentBase: __dirname + "/dist"
    }
  };