module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/stylesheets/_variables.scss";
        @import "@/assets/stylesheets/_normalize.scss";`
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns:
      [
      ]
    }
  }
}
