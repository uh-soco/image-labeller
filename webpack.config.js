const path = require('path')
const child = require('child_process')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    sovellukseMME: ['@babel/polyfill', './app/index.js'],
  },

  output: {
    path: path.resolve(__dirname, 'app', 'build'),

    /*** https://webpack.js.org/configuration/output/#template-strings ***/
    filename: 'tuotanto[name].js'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'app',  'build'),
    compress: true,
    port: 3003,
    historyApiFallback: true,
    
    before() {
      child.spawn(  'NODE_ENV='.concat(process.env.NODE_ENV), ['PORT=3003', 'electron app/.', ], {
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
        test: /\.(js|jsx)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ],
  }
  ,resolve: {
    extensions: ['.js','.jsx']
  }

  ,plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'app/app.html') })]
}

module.exports = config
