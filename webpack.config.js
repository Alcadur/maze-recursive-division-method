const path = require('path');

module.exports = {
    mode: "development",
    entry: ['./src/main.js'],

    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000
    }
};