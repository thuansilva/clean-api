const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: { '~': path.join(__dirname, 'src') },
  },
  module: {
    rule: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.scss/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader', options: { module: true } },
      //     { loader: 'sass-loader' },
      //   ],
      // },
    ],
  },
  devServer: {
    contenBase: './pulic',
    writeToDisk: true,
  },
  external: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [new CleanWebpackPlugin()],
};
