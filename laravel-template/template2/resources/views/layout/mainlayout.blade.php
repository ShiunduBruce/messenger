<!DOCTYPE html>
<html lang="en">
<head>
@include('layout.partials.head')
</head>
@if(Route::is(['audio-call-start','audio-call']))
<body class="voice-call-page">
@endif
@if(Route::is(['forgotpassword-email','forgotpassword-mobile','login-email','login-phone','otp-email','otp-mobile','reset-password','signup-email','signup-mobile']))
<body class="account-page">
@endif
@if(Route::is(['settings']))
<body class="settings-page">
@endif
@if(Route::is(['status']))
<body class="status-page">
@endif
@if(!Route::is(['audio-call-start','audio-call','forgotpassword-email','forgotpassword-mobile','login-email','login-phone','otp-email','otp-mobile','reset-password','settings','signup-email','signup-mobile','status']))
<body>
@endif
@if(!Route::is(['forgotpassword-email','forgotpassword-mobile','login-email','login-phone','otp-email','otp-mobile','reset-password','signup-email','signup-mobile']))
@include('layout.partials.sidebar')
@endif
@yield('content')
@include('layout.partials.footer-scripts')
</body>
</html>