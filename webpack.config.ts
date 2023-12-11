import webpack from 'webpack';
import { BuildMode, BuildPath } from './config/build/types/types';
import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';


interface EnvVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean, //npm run build:prod -- --env analyzer=true
}

export default (env: EnvVariables) => {
    const paths: BuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer
    })
    return config
};