module.exports = {
    devtool: 'source-map',
    entry: {
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
    }
}