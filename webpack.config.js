const path = require("path")

module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "./bundle.js",
        path: path.join(__dirname, "dist"),
    },
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     port: 8080
    // },
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