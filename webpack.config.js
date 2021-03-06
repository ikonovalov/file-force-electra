var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './app/js/entry.js'],
    },

    output: {
        path: './app/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },

    devServer: {
        contentBase: './app',
        publicPath: 'http://localhost:8080/built/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
    ]
};