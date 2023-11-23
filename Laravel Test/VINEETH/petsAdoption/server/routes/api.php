<?php

use App\Http\Controllers\SellerController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;

use Illuminate\Http\Request;
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


Route::POST('/user',[UserController::class,'user']);
Route::POST('/login',[UserController::class,'Login']);
Route::GET('/get_data',[UploadController::class,'getData']);
Route::POST('/uploads',[UploadController::class,'upload'])->middleware('auth');
Route::POST('/order',[SellerController::class,'sell']);
