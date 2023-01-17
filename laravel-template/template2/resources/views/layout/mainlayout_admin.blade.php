<!DOCTYPE html>
<html lang="en">
<head>
@include('layout.partials.head_admin')
</head>
@if(Route::is(['coming-soon','error']))
<body class="error-page">
@endif
@if(!Route::is(['coming-soon','error']))
<body>
@endif
@if(!Route::is(['coming-soon','error','forgot-password','login']))
@include('layout.partials.header_admin')
@include('layout.partials.nav_admin')
@endif
@yield('content')
@include('layout.partials.footer_admin-scripts')
</body>
</html>