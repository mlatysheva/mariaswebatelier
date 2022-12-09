import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = buildBabelLoader(options);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoader = buildCssLoader(isDev);

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    fileLoader,
    babelLoader,
    svgLoader,
    tsLoader,
    cssLoader
  ]
}
