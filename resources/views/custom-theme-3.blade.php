<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Encoding -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <!-- Optimized for mobile -->
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

        <!-- Optimized for web search -->
        <meta name="robots" content="index, follow" />

        <!-- Info for website -->
        <title>Multiple themes - theme 3</title>
        <meta name="description" content="application multiple themes" />
        <meta name="keywords" content="laravel, react, webpack, multiple, themes" />

        <!-- Fonts -->
        <link type="text/css" rel="stylesheet" href="{{ asset("css/fonts.css") }}" />
        <link type="text/css" rel="stylesheet" href="{{ asset("css/fontawesome.min.css") }}" />

        <!-- Styles -->
        <link type="text/css" rel="stylesheet" href="{{ mix("custom-theme-3/css/app.css", "build") }}" />

        <!-- Favicons -->
		<link type="image/x-icon" rel="icon" href="{{ asset("media/favicons/favicon.ico") }}" />
        <link type="image/x-icon" rel="shortcut icon" href="{{ asset("media/favicons/favicon.ico") }}" />

        <link type="image/png" rel="icon" href="{{ asset("media/favicons/favicon-16x16.png") }}" sizes="16x16" />
        <link type="image/png" rel="icon" href="{{ asset("media/favicons/favicon-32x32.png") }}" sizes="32x32" />
        <link type="image/png" rel="icon" href="{{ asset("media/favicons/favicon-96x96.png") }}" sizes="96x96" />
        <link type="image/png" rel="icon" href="{{ asset("media/favicons/favicon-192x192.png") }}" sizes="192x192" />

        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset("media/favicons/favicon-180x180.png") }}" />

        <!-- Info manifest -->
        <link rel="manifest" href="{{ asset("info/manifest.json") }}" />

        <!-- Scripts -->
        <script src="{{ mix("custom-theme-3/js/app.js", "build") }}" defer></script>
        <script src="{{ asset("js/fontawesome.min.js") }}"></script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
