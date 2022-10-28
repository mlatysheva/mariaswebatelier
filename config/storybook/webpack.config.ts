import path from "path";
import webpack from 'webpack';
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    build: '',
    entry: '',
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  config.module?.rules?.push(buildCssLoader(true));
  
  return config;
}