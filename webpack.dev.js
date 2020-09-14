const path = require("path")
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    entry: "./src/index.jsx",
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
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
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
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
            hash: false,
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ]
})