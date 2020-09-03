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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
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
        ]
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        host: "127.0.0.1",
        port: 80,
        compress: true,
        open: true
    },
    plugins: [
        new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: [],
			cleanAfterEveryBuildPatterns: [
				'**/*.js', 
				'**/*.map',
				'!assets/images', 
				'!assets/images/**/*'
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