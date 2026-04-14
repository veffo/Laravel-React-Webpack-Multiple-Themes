const mix = require("laravel-mix");

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

try {
    require(`${__dirname}/webpack/webpack.${process.env.npm_config_theme}.mix.js`);
} catch (ex) {
    console.log(
        "npm run dev --theme=custom-theme-1",
        "npm run watch --theme=custom-theme-1",
        "npm run prod --theme=custom-theme-1",

        "npm run dev --theme=custom-theme-2",
        "npm run watch --theme=custom-theme-2",
        "npm run prod --theme=custom-theme-2",

        "npm run dev --theme=custom-theme-3",
        "npm run watch --theme=custom-theme-3",
        "npm run prod --theme=custom-theme-3",
    )

    throw new Error("No correct");
};
