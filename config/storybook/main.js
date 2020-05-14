const path = require('path');

module.exports = {
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
  },

  // https://storybook.js.org/docs/configurations/custom-webpack-config/
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  stories: ['../../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes'
  ]
}
