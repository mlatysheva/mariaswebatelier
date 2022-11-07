import type { Configuration as DevServerConfigutation } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigutation {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
      logging: 'error',
    },
  };
}
