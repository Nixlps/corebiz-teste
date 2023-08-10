const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3010, 
        compress: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader',
                ]
            },
            
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                use: [
                  {
                    loader: 'file-loader'
                  }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|)?$/,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
};