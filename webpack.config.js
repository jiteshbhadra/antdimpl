var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: './js/app.js',
        html: './index.html'
    },
    output: {
        filename: 'app.js',
        path: __dirname + "/dist",
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: path.resolve(__dirname, './app/js'),
    },

    module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loaders: ["react-hot", "babel-loader"]
                    
                },
                {
                    test: /\.json$/,
                    loaders: ["json-loader"],
                },
                {
                    test: /\.html$/,
                    loader: "file?name=[name].[ext]"
                }
                ,{
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract(
                                    "css?sourceMap!" +
                                    "less?relativeUrls&noIeCompat"
                        )
                },
                {
                    test: /\.css$/, 
                    loader: "style!css"
                }
                ]
            },
    plugins: 
    [
        new ExtractTextPlugin("styles.css"),
    ]
};
