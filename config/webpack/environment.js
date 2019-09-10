const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// ERB loader
const erb =  require('./loaders/erb')

// Vue loader
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

// Plugins
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
// Use bootstrap (with jquery, popper.js)
environment.plugins.append(
    'Provide',
    new webpack.ProvidePlugin({
        jQuery: 'jquery/dist/jquery',
        Popper: 'popper.js/dist/popper'
    })
)

// Loaders
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('erb', erb)

module.exports = environment

// Enable SplitChunks with the default config
// environment.splitChunks()
