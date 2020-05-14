module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/scss/helpers/_config.scss";
                    @import "@/scss/helpers/_flexbox.scss";
                    @import "@/scss/helpers/_grid.scss";
                    @import "@/scss/helpers/_respond-to.scss";
                `
      }
    }
  }
}
