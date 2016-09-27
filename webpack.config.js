var webpackConfig = {
    entry: './src/app/index.js',
    output: {
        path: (__dirname + '/client/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/client/',
        historyApiFallback: true
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]},
};

module.exports = webpackConfig;
