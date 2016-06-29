module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'main': './app/main.ts'
    },
    output: {
        filename: './public/[name].js'
    },
    resolve: {
        // Add .ts and .tsx as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
}