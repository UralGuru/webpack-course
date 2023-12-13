import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration{
    const {mode, paths} = options;
    const isDev = options.mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        devtool: isDev ? 'eval-cheap-module-source-map' : 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options)
    }
}