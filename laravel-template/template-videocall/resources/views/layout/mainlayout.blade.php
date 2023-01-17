<!DOCTYPE html>
<html lang="en">
<head>
@include('layout.partials.head')
</head>
<body>
@if(!Route::is(['forgot-password','register','create-password','index']))
@include('layout.partials.header')
@endif
@yield('content')
@include('layout.partials.footer-scripts')
  </body>
</html>