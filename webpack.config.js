const path = require('path')
const child = require('child_process')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    sovellukseMME: ['@babel/polyfill', './app/index.js'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),

    /*** https://webpack.js.org/configuration/output/#template-strings ***/
    filename: 'tuotanto[name].js'
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'app/app.html') })]
}

module.exports = config
