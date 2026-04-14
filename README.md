<p align="center">
    <a href="#">
        <img width="150" src="https://github.com/veffo/Laravel-React-Webpack-Multiple-Themes/blob/main/_assets/media/logo.png" alt="logo" />
    </a>
</p>

<p align="center">
    <a href="#"><img alt="license MIT" src="https://img.shields.io/badge/license-MIT-8dbb05.svg" /></a>
    <a href="#"><img alt="Stars" src="https://img.shields.io/github/stars/veffo/Laravel-React-Webpack-Multiple-Themes?style=flat-square" /></a>
    <a href="#"><img alt="Forks" src="https://img.shields.io/github/forks/veffo/Laravel-React-Webpack-Multiple-Themes?style=flat-square" /></a>
</p>

<p align="center">
    Customizable Laravel/React project with isolated theme management.
    <br />
    <a href="mailto:q.6110@mail.ru">Report bug</a>
    ·
    <a href="mailto:q.6110@mail.ru">Request feature</a>
</p>

<div id="user-content-toc">
    <ul align="center" style="list-style: none;">
        <summary>
            <h1>
                Modern Multiple Themes
            </h1>
        </summary>
    </ul>
</div>

## Table of Contents

<details>
    <summary>
        <b>Expand list</b>
    </summary>
    <ul>
        <li>
            <a href="#about-the-project">
                About The Project
            </a>
        </li>
        <li>
            <a href="#demo">
                Demo
            </a>
        </li>
        <li>
            <a href="#features">
                Features
            </a>
        </li>
        <li>
            <a href="#details">
                Details
            </a>
        </li>
        <li>
            <a href="#installation">
                Installation
            </a>
        </li>
        <li>
            <a href="#running-locally">
                Running locally
            </a>
        </li>
        <li>
            <a href="#usage-and-implementation">
                Usage and Implementation
            </a>
            <ul>
                <li>
                    <a href="#asset-integration">
                        Asset integration
                    </a>
                </li>
                <li>
                    <a href="#route-management">
                        Route management
                    </a>
                </li>
                <li>
                    <a href="#directory-structure">
                        Directory structure
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#styling-and-theming">
                Styling and Theming
            </a>
            <ul>
                <li>
                    <a href="#custom-variables">
                        Custom variables
                    </a>
                </li>
                <li>
                    <a href="#example-variables">
                        Example variables
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#conclusion">
                Conclusion
            </a>
        </li>
        <li>
            <a href="#requirements">
                Requirements
            </a>
        </li>
        <li>
            <a href="#support">
                Support
            </a>
        </li>
        <li>
            <a href="#license">
                License
            </a>
        </li>
    </ul>
</details>

## About The Project

Professional boilerplate for scalable apps featuring an isolated, CLI-driven multi-theme system. Unlike basic managers that only swap views, this engine decouples assets at the Webpack level, enabling independent compilation and ensuring zero interference between themes.

By leveraging custom Webpack logic, it guarantees that changes in one theme never compromise the build integrity of others. It combines modular architectural flexibility with the power of Laravel Mix for a seamless, high-performance developer experience.

## Demo

<p>
    <a href="https://codesandbox.io/p/github/veffo/Laravel-React-Webpack-Multiple-Themes" target="_blank">
        Click here
    </a>
</p>

<p>
    <a href="#">
        <img src="https://github.com/veffo/Laravel-React-Webpack-Multiple-Themes/blob/main/_assets/media/demo.webp" alt="demo" />
    </a>
</p>

## Features

<ul>
    <li>
        Isolated Compilation.
    </li>
    <li>
        Dynamic Entry Points.
    </li>
    <li>
        Shared Backend Logic.
    </li>
    <li>
        Zero Asset Overlap.
    </li>
    <li>
        Resource Optimization.
    </li>
    <li>
        Scalable Architecture.
    </li>
</ul>

## Details

The system intercepts CLI arguments using process `npm config theme`. This value is used to dynamically set `mix.js()` and `mix.sass()` paths, effectively creating a "virtual" configuration for the selected theme only. This prevents the Webpack watcher from monitoring thousands of unnecessary files in inactive theme folders.

## Installation

### Step 1

Clone this repository:

```bash
git clone https://github.com/veffo/Laravel-React-Webpack-Multiple-Themes
```

Go into the repository:

```bash
cd Laravel-React-Webpack-Multiple-Themes
```

### Step 2

Install [Composer](https://getcomposer.org/):

```shell
composer install
```

### Step 3

Install [Node](https://nodejs.org) (comes with [NPM](https://npmjs.com)):

```shell
npm install
```

With [Yarn](https://yarnpkg.com):

```shell
yarn install
```

### Step 4

Installing dependencies through composer:

```shell
php artisan install
```

### Step 5

Configure your environment:

```shell
cp .env.example .env && php artisan key:generate
```

## Running locally

You can launch development, watch, or production scripts for a specific theme using the `--theme` flag.

To generate the dev work:


```shell
npm run dev --theme=custom-theme-1
or
npm run dev --theme=custom-theme-2
or
npm run dev --theme=custom-theme-3
```

To generate the app for real-time edits:


```shell
npm run watch --theme=custom-theme-1
or
npm run watch --theme=custom-theme-2
or
npm run watch --theme=custom-theme-3
```

To generate the app build:


```shell
npm run prod --theme=custom-theme-1
or
npm run prod --theme=custom-theme-2
or
npm run prod --theme=custom-theme-3
```

> Basic visual build are in `public/build/custom-theme-(num of theme)`.

## Usage and Implementation

Seamlessly integrate theme-specific assets and routes within a modular directory structure.

### Asset integration

Simple integration of compiled assets into Blade views for each selected theme.

```php
<link type="text/css" rel="stylesheet" href="{{ mix("custom-theme-1/css/app.css", "build") }}" />
<script src="{{ mix("custom-theme-1/js/app.js", "build") }}" defer></script>
```

### Route management

You can change the options of your app from `routes/web.php` file.

```php
use App\Http\Controllers\themes\custom_theme_1\ThemeController as Theme_1;
use App\Http\Controllers\themes\custom_theme_2\ThemeController as Theme_2;
use App\Http\Controllers\themes\custom_theme_3\ThemeController as Theme_3;

Route::get("/", [Theme_1::class, "index"])->name("custom_theme_1.index");
Route::get("/theme-1", [Theme_1::class, "index"])->name("custom_theme_1.index");
Route::get("/theme-2", [Theme_2::class, "index"])->name("custom_theme_2.index");
Route::get("/theme-3", [Theme_3::class, "index"])->name("custom_theme_3.index");
```

### Directory structure

This is a modular approach where each theme is self-contained within the `themes` directory:

```bash
resources/themes/
├── common/             # React common components
├── custom-theme-1/
│   ├── js/             # React entry points & components
│   ├── sass/           # Theme-specific SCSS variables
└── custom-theme-2/
│   ├── js/             # React entry points & components
│   ├── sass/           # Theme-specific SCSS variables
└── custom-theme-3/
│   ├── js/             # React entry points & components
│   ├── sass/           # Theme-specific SCSS variables
```

## Styling and Theming

Utilize a structured SCSS architecture to define and apply theme-specific variables across your app.

### Custom variables

The colored elements are mixed with the base color to create a uniform color palette.

```scss
// Colors
$white: #ffffff;
$iceWhite: #f6f9fb;
$black: #000000;
$raisinBlack: #221e1e;
$dullBlack: #161616;
$nearBlack: #101112;
$darkCharcoal: #2e2e2e;

// Preloader colors
$bg-color-preloader: $dullBlack;
$border-top-color-preloader-loader-before: $darkCharcoal;
$border-right-color-preloader-loader-before: $darkCharcoal;
$border-bottom-color-preloader-loader-before: $darkCharcoal;
$border-left-color-preloader-loader-before: $white;

// Navigation Top Bar colors
$bg-color-headerMenu-sticky: $dullBlack;
$bg-color-headerMenu-open: $dullBlack;
```

### Example variables

#### Initial variables

Initial all variables.

```scss
@import "variables";
```

#### Use variables

Add variable value bg in class.

```scss
.c-headerMenu.is-sticky {
    background-color: $bg-color-headerMenu-sticky;
}
```

Add variable value color in class.

```scss
.social-item__icon {
    color: $color-intro-social-item-icon;
}
```

## Conclusion

This project is built for developers who need a strict separation of concerns in a multi-UI environment. By automating theme-specific builds through the console, the system ensures a clean, modular, and optimized workflow for any number of independent themes.

## Requirements

<ul>
    <li>
        Git
    </li>
    <li>
        Composer
    </li>
    <li>
        Node
    </li>
    <li>
        NPM or Yarn
    </li>
</ul>

## Support

For all questions, please contact us by email: <a href="mailto:q.6110@mail.ru">q.6110@mail.ru</a>

## License

This project is open-sourced software licensed under the <a href="https://opensource.org/license/MIT" target="_blank">MIT license</a>.<br/>
Distributed under the <a href="https://opensource.org/license/MIT" target="_blank">MIT license</a>. See <a href="https://opensource.org/license/MIT" target="_blank">MIT license</a> for more information.
