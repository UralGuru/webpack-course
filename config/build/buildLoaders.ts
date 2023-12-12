import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript"

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      { 
        loader: '@svgr/webpack', 
        options: { 
          icon: true, //чтоб можно было раблотать как с иконками
          svgoConfig:{
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true, // style={{ color: * }}
                }
              }
            ]
          }
        } 
      }
    ],
  }

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: '[local]-[hash:base64:5]'
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };
  
  const tsLoader = {
    // ts-loader умеет работать с JSX
    // Если бы мы не использовали ts: нужен был бы babel-loader
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        }
      }
    ]
  }

  return [
    assetLoader,
    svgrLoader,
    scssLoader,
    tsLoader
  ]
}
