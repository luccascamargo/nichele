<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name', 'Laravel')}}</title>
    <link rel="stylesheet" href="{{asset('plugins/global/plugins.bundle.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.bundle.css')}}">

    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
</head>
<body id="kt_body" class="bg-body">
    <div class="d-flex flex-column flex-root">
        @yield('content')
    </div>
    <script src="{{asset('plugins/global/plugins.bundle.js')}}"></script>
    <script src="{{asset('js/scripts.bundle.js')}}"></script>
</body>
</html>
