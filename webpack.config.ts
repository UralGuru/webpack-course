import webpack from 'webpack';
import { BuildMode, BuildPath, BuildPlatform } from './config/build/types/types';
import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';


interface EnvVariables {
    mode?: BuildMode,
    port?: number,
    analyzer?: boolean, //npm run build:prod -- --env analyzer=true
    platform?: BuildPlatform
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
        platform: env.platform ?? 'desktop',
        analyzer: env.analyzer
    })
    return config
};