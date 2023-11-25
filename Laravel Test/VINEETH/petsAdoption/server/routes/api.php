<?php

use App\Http\Controllers\SellerController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use App\Models\Upload;
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
Route::get('/get_data', function () {
    $data = Upload::all();
    return response()->json(['status' => true, 'data' => $data]);
});
Route::group(["middleware" => ["auth"]], function(){
    Route::POST('/uploads', [UploadController::class, 'upload']);
    Route::POST('/order', [SellerController::class, 'postOrder']);
    Route::GET('/get_order',[SellerController::class,'getOrders']);
    Route::GET('/get_request',[SellerController::class,'getRequests']);
    ROUTE::POST('/status_update',[SellerController::class,'statusUpdate']);
});
