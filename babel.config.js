module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [ 
      [require('@babel/plugin-proposal-class-properties'), { loose: true }]
    ]
  };