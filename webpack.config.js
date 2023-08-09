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
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader',
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