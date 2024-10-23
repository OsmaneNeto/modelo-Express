const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'src/public'),
    filename: 'bundle.js',
    publicPath: '/', // Necessário para HMR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/public'), // Novo formato para arquivos estáticos
    },
    hot: true, // Ativa HMR
    port: 3300, // A mesma porta que seu servidor Express
  },
  mode: 'development', // Use 'production' em produção
};
