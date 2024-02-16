import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/type";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions):ModuleOptions['rules'] {

    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const cssModuleLoader = {
        loader: "css-loader",
            options: {
                modules: {
                    localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]" 
                }
            },
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: [
            { 
                loader: '@svgr/webpack',
                options: { 
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                } 
            }
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        cssModuleLoader,
        // Compiles Sass to CSS
        "sass-loader",
        ],
    }

    return [
        assetLoader,
        svgLoader,
        scssLoader,
        tsLoader
    ]
}