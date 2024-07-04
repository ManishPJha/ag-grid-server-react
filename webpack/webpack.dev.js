const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        compress: true,
        port: 3000,
        open: true,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('development'),
        }),
    ],
};
