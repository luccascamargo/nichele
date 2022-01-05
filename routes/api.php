<?php

use App\Http\Controllers\Api\BuildingController;
use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('buildings', BuildingController::class)->only('index','show');
Route::apiResource('contacts', ContactController::class)->only('store');
Route::get('cities', [BuildingController::class, 'city']);
Route::get('districts', [BuildingController::class, 'district']);
Route::get('types', [BuildingController::class, 'type']);
