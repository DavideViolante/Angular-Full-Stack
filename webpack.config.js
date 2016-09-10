const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        'vendor': './src/app/vendor.ts',
        'main': './src/app/main.ts'
    },
    output: {
        filename: './src/bundle/[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ]
}