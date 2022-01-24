<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'as' => 'auth.'], function() {
   Route::get('login', [LoginController::class, 'showForm'])->name('login');
   Route::post('login',  [LoginController::class, 'login'])->name('login');
   Route::post('logout',  [LoginController::class, 'logout'])->name('logout');
});

