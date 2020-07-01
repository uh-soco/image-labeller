const path = require('path')
const child = require('child_process')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'tuotantobundleMME.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3003,
    before() {
      child.spawn(  'NODE_ENV=dev', ['PORT=3003', 'electron .', ], {
        shell: true,
        env: process.env,
        stdio: 'inherit'
      }).on('close', code => process.exit(code))
    
    }



  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
    }
    ],
  },
  plugins: [new HtmlWebpackPlugin({   template: './app/app.html'  })]
}

module.exports = config