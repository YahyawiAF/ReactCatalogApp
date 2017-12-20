var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
],
externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/Component/Main.jsx',
      Nav:'app/Component/Nav.jsx',
      Api:'app/Component/Api.jsx',
      Photo:'app/Component/Photo.jsx',

      Album:'app/src/Album-list.jsx',
      Store:'app/store/album_store.jsx',
       PhotoStore:'app/store/PhotoStore.jsx',
       ImageDetail:'app/component/ImageDetail.jsx',
      Action:'app/store/Action.jsx',
      Image:'app/component/Image.jsx',
      AddWishList:'app/component/AddWishList.jsx',
      WishList:'app/component/WishList.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        query: {
          presets: ['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
