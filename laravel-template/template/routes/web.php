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
})->name('index');

Route::get('/home', function () {
    return view('index');
})->name('home');

Route::get('/index', function () {
return view('index');
});

Route::get('/call-log', function () {
return view('call-log');
})->name('call-log');

Route::get('/forgot-password', function () {
return view('forgot-password');
})->name('forgot-password');

Route::get('/group', function () {
return view('group');
})->name('group');

Route::get('/login', function () {
return view('login');
})->name('login');

Route::get('/register', function () {
return view('register');
})->name('register');

Route::get('/status', function () {
return view('status');
})->name('status');
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
Route::get('/error', function () {
return view('admin.error');
})->name('error');
Route::get('/firebase-settings', function () {
return view('admin.firebase-settings');
})->name('firebase-settings');

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
Route::get('/users', function () {
return view('admin.users');
})->name('users');   
Route::get('/components', function () {
return view('admin.components');
})->name('components');
Route::get('/data-tables', function () {
return view('admin.data-tables');
})->name('data-tables');
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
 Route::get('/tables-basic', function () {
return view('admin.tables-basic');
})->name('tables-basic');
 Route::get('/vector-maps', function () {
return view('admin.vector-maps');
})->name('vector-maps');
});
/********************ADMIN ROUTES END******************************/