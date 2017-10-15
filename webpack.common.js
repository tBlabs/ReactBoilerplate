const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
    {
        entry:
        {
            src: './src/index.tsx',
            //   lib: [ 'react', 'react-dom', 'mobx', 'mobx-react', 'inversify', 'axios' ]
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
                                localIdentName: '[local]__[hash:base64:8]'
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
                '**/*',
                __dirname + '/node_modules',
                __dirname + '/src'
            ]
        },

        plugins:
        [
            new HtmlWebpackPlugin(
                {
                    title: "App",
                    template: "./src/index.template.ejs"
                })
        ]

    };