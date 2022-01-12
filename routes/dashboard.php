<?php

use App\Http\Controllers\Dashboard\BuildingController;
use App\Http\Controllers\Dashboard\CharacteristicController;
use App\Http\Controllers\Dashboard\HomeController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'cms', 'as' => 'cms.'], function() {
    Route::get('/', [HomeController::class, 'index'])->name('index');

    Route::resource('caracteristicas', CharacteristicController::class)->parameter('caracteristicas', 'characteristic');
    Route::resource('imoveis', BuildingController::class)->parameter('imoveis','building');
});
