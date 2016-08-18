module.exports = {
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
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    './node_modules/rxjs',
                    './node_modules/@angular'
                ]
            }
        ]
    }
}