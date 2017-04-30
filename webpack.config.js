module.exports = {
    entry: './src/app.ts',
    output: {
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts?$/, loader: 'ts-loader'}
        ]
    }
}
