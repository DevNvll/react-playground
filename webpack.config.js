module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
    ]
  }
};
