const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode:'development',
    entry: {
        app: path.join(__dirname, './main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [new VueLoaderPlugin()],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
};