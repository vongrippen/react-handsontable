module.exports = [
  {
    devtool: 'source-map',
    entry: {
      './dist/react-handsontable': './src/index',
    },

    output: {
      path: './',
      filename: '[name].js',
      library: 'HotTable',
      libraryTarget: 'umd',
    },

    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react'
      },
      'handsontable': {
        root: 'Handsontable',
        commonjs2: 'handsontable',
        commonjs: 'handsontable',
        amd: 'handsontable',
        umd: 'handsontable'
      },
      'moment': {
        root: 'moment',
        commonjs2: 'moment',
        commonjs: 'moment',
        amd: 'moment',
        umd: 'moment'
      },
      'numbro': {
        root: 'numbro',
        commonjs2: 'numbro',
        commonjs: 'numbro',
        amd: 'numbro',
        umd: 'numbro'
      },
      'pikaday': {
        root: 'pikaday',
        commonjs2: 'pikaday',
        commonjs: 'pikaday',
        amd: 'pikaday',
        umd: 'pikaday'
      },
      'zeroclipboard': {
        root: 'Zeroclipboard',
        commonjs2: 'zeroclipboard',
        commonjs: 'zeroclipboard',
        amd: 'zeroclipboard',
        umd: 'zeroclipboard'
      }
    },

    module: {
      loaders: [
        {
          test: /(\.js)|(\.jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
  }
];
