const path = require('path')

const baseConfig = {
  mode: 'production',
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
}

const production = baseConfig
const development = {
  ...baseConfig,
  mode: 'development',
  output: {
    ...baseConfig.output,
    publicPath: '/dist/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
  },
}

module.exports = (_, argv) => (argv.mode === 'development' ? development : production)
