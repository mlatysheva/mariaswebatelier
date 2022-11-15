import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildCssLoader } from "./loaders/buildCssLoader"

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              // keyAsDefaultValue: ['en'],
              keyAsDefaultValue: false
            }
          ]
        ]
      }
    }
  }

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
