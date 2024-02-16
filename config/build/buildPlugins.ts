import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/type";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(options: BuildOptions):Configuration['plugins'] {

    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            favicon: options.paths.favicon
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __MODE__: JSON.stringify(options.mode)
        })
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        // individual process to check for errors ts
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new CopyPlugin({
            patterns: [
              { from: path.resolve(options.paths.public, 'locales'), to: path.resolve(options.paths.output, 'locales') },
            ],
        }))
    }

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}
