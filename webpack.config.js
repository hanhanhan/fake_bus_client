const path = require("path")

module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "./bundle.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        loaders: [
            { 
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ] 
            }
        ]
    }
}