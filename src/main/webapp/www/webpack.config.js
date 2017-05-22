var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  //entry: './src/main.js',
  entry:{
    'demo': './src/demo/main.js'
    //,'login': './src/login/main.js'
  },
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'build.js'
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader','css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
    //outputPath: path.join(__dirname, 'build')
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
  ,new HtmlWebpackPlugin({
    filename: 'demo/index.html',
    template: './src/demo/index.html',
    inject: false,
    chunks: ['demo']
    //hash:true,
    // minify:{
    //           removeComments:false,
    //           collapseWhitespace:false
    //       }
  })
  // ,new HtmlWebpackPlugin({
  //   filename: 'login/index.html',
  //   template: './src/login/login.html',
  //   inject: false,
  //   chunks: ['login']
  // })
])

if (process.env.NODE_ENV === 'production') {
  module.exports.output= {
    path: path.resolve(__dirname, './dist'),
    publicPath: '../',//就是css中的url的地址进行转换，转换成正确的
    filename:'[name]/build.js'
  };
  module.exports.devtool = '#source-map'
//console.log(path.resolve(__dirname, './'));
//console.log(path.resolve(__dirname,'./dist/1111.txt'));
  module.exports.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname,'./src/static/') ,to:path.resolve(__dirname,'./dist/static'),
      //force: true,
      //toType: 'dir',
      //ignore: ['.*']
    }])
  );
} else {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  console.log(path.resolve(__dirname, './dev'));
  module.exports.output= {
    path: path.resolve(__dirname, './dev'),
    publicPath: '/',
    filename:'[name]/build.js'
  }
  module.exports.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname,'./src/static/') ,to:path.resolve(__dirname,'./dev/static'),
    //force: true,
    //toType: 'dir',
    //ignore: ['.*']
  }])
);

}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
