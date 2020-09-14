
const path = require("path");

function resolve(filename) {
  return path.join(__dirname, filename);
}

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    open: true,
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://localhost:8089',
        changeOrigin: true
      }
    }
  }
};
