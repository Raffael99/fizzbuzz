const path = require('path');

module.exports = {
    entry: './src/fizzbuzz.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'fizzbuzz.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'umd',
            name: 'FizzBuzz',
            umdNamedDefine: true,
        },
        globalObject: 'this',
    },
};