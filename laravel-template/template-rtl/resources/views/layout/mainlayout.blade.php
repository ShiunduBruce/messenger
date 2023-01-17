<!DOCTYPE html>
<html lang="en">
  <head>
    @include('layout.partials.head')
  </head>
  @if(Route::is(['forgot-password','login','register']))
  <body class="account-page">
  @endif
@yield('content')
@include('layout.partials.footer-scripts')
  </body>
</html>