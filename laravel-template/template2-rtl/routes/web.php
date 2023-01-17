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
Route::get('/', function () {
    return view('index');
})->name('page');   
Route::get('/home', function () {
    return view('index');
})->name('page');
Route::get('/index', function () {
    return view('index');
})->name('page');
Route::get('/archived', function () {
    return view('archived');
})->name('archived');
Route::get('/audio-call-start', function () {
    return view('audio-call-start');
})->name('audio-call-start');
Route::get('/audio-call', function () {
    return view('audio-call');
})->name('audio-call');
Route::get('/audiocall-group', function () {
    return view('audiocall-group');
})->name('audiocall-group');
Route::get('/audiocall-single', function () {
    return view('audiocall-single');
})->name('audiocall-single');
Route::get('/contacts', function () {
    return view('contacts');
})->name('contacts');
Route::get('/forgotpassword-email', function () {
    return view('forgotpassword-email');
})->name('forgotpassword-email');
Route::get('/forgotpassword-mobile', function () {
    return view('forgotpassword-mobile');
})->name('forgotpassword-mobile');
Route::get('/group', function () {
    return view('group');
})->name('group');
Route::get('/login-email', function () {
    return view('login-email');
})->name('login-email');
Route::get('/login-phone', function () {
    return view('login-phone');
})->name('login-phone');
Route::get('/otp-email', function () {
    return view('otp-email');
})->name('otp-email');
Route::get('/otp-mobile', function () {
    return view('otp-mobile');
})->name('otp-mobile');
Route::get('/reset-password', function () {
    return view('reset-password');
})->name('reset-password');
Route::get('/settings', function () {
    return view('settings');
})->name('settings');
Route::get('/signup-email', function () {
    return view('signup-email');
})->name('signup-email');
Route::get('/signup-mobile', function () {
    return view('signup-mobile');
})->name('signup-mobile');
Route::get('/status', function () {
    return view('status');
})->name('status');
Route::get('/video-call', function () {
    return view('video-call');
})->name('video-call');
Route::get('/videocall-group', function () {
    return view('videocall-group');
})->name('videocall-group');
Route::get('/videocall-single', function () {
    return view('videocall-single');
})->name('videocall-single');
/*****************ADMIN ROUTES*******************/
Route::Group(['prefix' => 'admin'], function () { 
Route::get('/index_admin', function () {
return view('admin.index_admin');
})->name('pagee'); 
Route::get('/admob', function () {
return view('admin.admob');
})->name('admob');  
Route::get('/blank-page', function () {
return view('admin.blank-page');
})->name('blank-page');  
Route::get('/blocked-users', function () {
return view('admin.blocked-users');
})->name('blocked-users');  
Route::get('/call-history', function () {
return view('admin.call-history');
})->name('call-history');  
Route::get('/coming-soon', function () {
return view('admin.coming-soon');
})->name('coming-soon');  
Route::get('/components', function () {
return view('admin.components');
})->name('components');  
Route::get('/data-tables', function () {
return view('admin.data-tables');
})->name('data-tables');  
Route::get('/error', function () {
return view('admin.error');
})->name('error');
Route::get('/firebase-settings', function () {
return view('admin.firebase-settings');
})->name('firebase-settings');
Route::get('/forgot-password', function () {
return view('admin.forgot-password');
})->name('forgot-password');
Route::get('/form-basic-inputs', function () {
return view('admin.form-basic-inputs');
})->name('form-basic-inputs'); 
Route::get('/form-horizontal', function () {
return view('admin.form-horizontal');
})->name('form-horizontal');
Route::get('/form-input-groups', function () {
return view('admin.form-input-groups');
})->name('form-input-groups');
Route::get('/form-mask', function () {
return view('admin.form-mask');
})->name('form-mask'); 
Route::get('/form-validation', function () {
return view('admin.form-validation');
})->name('form-validation');
Route::get('/form-vertical', function () {
return view('admin.form-vertical');
})->name('form-vertical');
Route::get('/general', function () {
return view('admin.general');
})->name('general');
Route::get('/group-history', function () {
return view('admin.group-history');
})->name('group-history'); 
Route::get('/login', function () {
return view('admin.login');
})->name('login');  
Route::get('/report-users', function () {
return view('admin.report-users');
})->name('report-users');
Route::get('/sinch-settings', function () {
return view('admin.sinch-settings');
})->name('sinch-settings');
Route::get('/tables-basic', function () {
return view('admin.tables-basic');
})->name('tables-basic');
Route::get('/users', function () {
return view('admin.users');
})->name('users');
Route::get('/vector-maps', function () {
return view('admin.vector-maps');
})->name('vector-maps');             
});
/********************ADMIN ROUTES END******************************/