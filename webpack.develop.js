const path = require("path")
const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(base, {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(s*).css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        host: "127.0.0.1",
        port: 80,
        compress: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
})