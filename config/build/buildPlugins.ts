import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/type";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions):Configuration['plugins'] {

    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        })
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}
