module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'main': './app/main.ts'
    },
    output: {
        filename: './public/[name].js'
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
                    './public/scripts/rxjs',
                    './public/scripts/@angular'
                ]
            }
        ]
    }
}