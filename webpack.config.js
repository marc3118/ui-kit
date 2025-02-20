// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            name: 'MyUIKit',
            type: 'umd'
        },
        // The critical fix:
        globalObject: 'this',
        clean: true
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};
