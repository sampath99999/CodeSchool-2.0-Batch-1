<?php

use App\Http\Controllers\ApplyJobController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'users'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::post('/createJob', [JobController::class, 'createJob']);
Route::get('/jobs', [JobController::class, 'jobs']);
Route::get('/jobs/{id}/', [JobController::class, 'myJobs']);
Route::get('/postedJobs/{id}/', [JobController::class, 'postedJobs']);
Route::post('/applyJob', [ApplyJobController::class, 'applyJob']);
Route::get('/applications', [ApplyJobController::class, 'applications']);
