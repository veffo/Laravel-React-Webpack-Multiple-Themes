const mix = require("laravel-mix");
require("laravel-mix-merge-manifest");

const minifier = require('minifier');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel applications. By default, we are compiling the CSS
| file for the application as well as bundling up all the JS files.
|
*/

// mix.webpackConfig({
//     stats: {
//         children: true,
//     },
// });

// Webpack fix error "react/jsx-runtime"
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    resolve: {
        extensions: ["*", ".wasm", ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
    },
});

mix.setPublicPath("./public/build")
    .ts("resources/themes/custom-theme-1/js/app.js", "public/build/custom-theme-1/js")
    .sass("resources/themes/custom-theme-1/sass/app.scss", "public/build/custom-theme-1/css")
    .options({
        minifier,
    })
    .browserSync({
        proxy: "Laravel-React-Webpack-Multiple-Themes",
        files: ["public/build/custom-theme-1/css/*.css", "public/build/custom-theme-1/js/*.js"],
        notify: false,
    })
    .mergeManifest()
    .sourceMaps()
    //.version()
    .disableNotifications();

if(mix.inProduction()) {
    mix.version();
};
