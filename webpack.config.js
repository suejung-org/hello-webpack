const path = require("path");

module.exports = [
    {
        // Configuration for CommonJS
        entry: "./src/index.js",
        output: {
            filename: "bundle.cjs",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: "commonjs2",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: [".js", ".mjs"],
        },
        target: "node",
        plugins: [
            codecovWebpackPlugin({
                enableBundleAnalysis: true,
                bundleName: "test-commonjs",
                uploadToken: process.env.WEBPACK_UPLOAD_TOKEN,
                apiUrl: process.env.WEBPACK_API_URL,
                debug: true,
            }),
        ],
    },
    {
        // Configuration for ES Module
        entry: "./src/index.js",
        output: {
            filename: "bundle.mjs",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: "module",
        },
        experiments: {
            outputModule: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: [".js", ".mjs"],
        },
        target: "web",
        plugins: [
            codecovWebpackPlugin({
                enableBundleAnalysis: true,
                bundleName: "test-esm",
                uploadToken: process.env.WEBPACK_UPLOAD_TOKEN,
                apiUrl: process.env.WEBPACK_API_URL,
                debug: true,
            }),
        ],
    },
    {
        // Configuration for standard JavaScript
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: [".js", ".mjs"],
        },
        target: "web",
        plugins: [
            codecovWebpackPlugin({
                enableBundleAnalysis: true,
                bundleName: "test-standard-js",
                uploadToken: process.env.WEBPACK_UPLOAD_TOKEN,
                apiUrl: process.env.WEBPACK_API_URL,
                debug: true,
            }),
        ],
    },
];
