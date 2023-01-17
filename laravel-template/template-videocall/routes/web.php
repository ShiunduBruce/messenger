<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/meeting-single-user', function () {
return view('meeting-single-user');
})->name('meeting-single-user'); 
Route::get('/meeting-call-vertical-2', function () {
return view('meeting-call-vertical-2');
})->name('meeting-call-vertical-2'); 
Route::get('/join-call', function () {
return view('join-call');
})->name('join-call'); 
Route::get('/forgot-password', function () {
return view('forgot-password');
})->name('forgot-password'); 
Route::get('/index', function () {
return view('index');
})->name('index');
Route::get('/create-password', function () {
return view('create-password');
})->name('create-password');
Route::get('/register', function () {
return view('register');
})->name('register');
Route::get('/meeting-call-2', function () {
return view('meeting-call-2');
})->name('meeting-call-2');
Route::get('/meetingcall-grid', function () {
return view('meetingcall-grid');
})->name('meetingcall-grid');
Route::get('/meetingcall-horizontal', function () {
return view('meetingcall-horizontal');
})->name('meetingcall-horizontal');
Route::get('/meetingcall-multigrid', function () {
return view('meetingcall-multigrid');
})->name('meetingcall-multigrid');
Route::get('/meeting-call-multigrid-2', function () {
return view('meeting-call-multigrid-2');
})->name('meeting-call-multigrid-2');
Route::get('/meetingcall-vertical', function () {
return view('meetingcall-vertical');
})->name('meetingcall-vertical');