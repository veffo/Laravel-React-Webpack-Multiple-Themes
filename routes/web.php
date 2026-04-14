<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\themes\custom_theme_1\ThemeController as Theme_1;
use App\Http\Controllers\themes\custom_theme_2\ThemeController as Theme_2;
use App\Http\Controllers\themes\custom_theme_3\ThemeController as Theme_3;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/", [Theme_1::class, "index"])->name("custom_theme_1.index");
Route::get("/theme-1", [Theme_1::class, "index"])->name("custom_theme_1.index");
Route::get("/theme-2", [Theme_2::class, "index"])->name("custom_theme_2.index");
Route::get("/theme-3", [Theme_3::class, "index"])->name("custom_theme_3.index");
