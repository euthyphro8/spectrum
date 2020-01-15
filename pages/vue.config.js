module.exports = {
  css: {
    extract: false
  },

  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === 'production' ?
    '/spectrum/' : '/'
}