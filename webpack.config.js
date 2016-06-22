module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'main': './app/main.ts'
    },
    output: {
        filename: './public/[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}