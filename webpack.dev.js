const path = require("path")
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")

module.exports = merge(common, {
    entry: "./src/index.jsx",
    output: {
        filename: '[name].[contenthash].bundle.js',
        chunkFilename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        contentBase: "./dist",
        writeToDisk: true,
        historyApiFallback: true,
        host: "127.0.0.1",
        port: 8084,
        compress: true,
        open: false
    },
    plugins: [
        new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: [],
			cleanAfterEveryBuildPatterns: [
				'**/*.js', 
                '**/*.map',
                '!*.html'
			],
		}),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
    ]
})