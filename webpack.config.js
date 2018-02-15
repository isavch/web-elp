var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        name: 'browser',
        entry: ['./client/index.tsx'],
        output: {
            path: path.resolve(__dirname, './lib/public'),
            filename: 'main.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        }
    }, {
        name: 'server',
        entry: ['./server/app.tsx'],
        target: 'node',
        output: {
            path: path.resolve(__dirname, './lib/server'),
            filename: '[name].js',
            libraryTarget: "commonjs2"
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        }
    }
];