const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          /*
                Enable Source Maps
               */
          sourceMap: true,
          /*
                Set postcss.config.js config path && ctx
               */
          config: {
            path: './.storybook/'
          }
        }
      }
    ],

    include: path.resolve(__dirname, '../')
  })

  return config
}