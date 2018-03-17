const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path:  path.join(__dirname, '../public_html/js'),
        filename: 'main.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch: true,
    mode: 'development'
}