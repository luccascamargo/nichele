<?php

use App\Http\Controllers\Api\BuildingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\PostController;
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
Route::get('buildings/characteristics/{search}', [BuildingController::class, 'characteristicsBySearch']);
Route::apiResource('contacts', ContactController::class)->only('store');
Route::get('cities', [BuildingController::class, 'city']);
Route::get('districts/{city}', [BuildingController::class, 'district']);
Route::get('types', [BuildingController::class, 'getBuildingsType']);
Route::get('emphasis', [BuildingController::class, 'emphasis']);
Route::get('commercials', [BuildingController::class, 'commercial']);
Route::get('faqs', [FaqController::class, 'index']);
Route::apiResource('posts', PostController::class)->only('index','show')->scoped([
    'post' => 'slug'
]);
Route::get('characteristics', [BuildingController::class, 'characteristicsAll']);
Route::get('characteristics/{id}', [BuildingController::class, 'characteristic']);
Route::get('highlight', [BuildingController::class, 'highligthRent']);
Route::get('comercialsState', [BuildingController::class, 'GetCommercialRealEstate']);
Route::get('photos/{id}', [BuildingController::class, 'album']);
Route::get('relacionados/{cep}', [BuildingController::class, 'GetImoveisRelacionais']);

Route::post('send/email', [ContactController::class, 'mail'])->name('email');
Route::post('send/email/advertise', [ContactController::class, 'mailAdvertise'])->name('emailAdvertise');
