<?php

namespace App\Http\Controllers\themes\custom_theme_2;

use App\Http\Controllers\Controller;

class ThemeController extends Controller {
    public function index() {
        return view("custom-theme-2");
    }
}
