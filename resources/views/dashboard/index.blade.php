@extends('layouts.app')

@section('header')
    <h1 class="d-flex flex-column text-dark fw-bolder my-0 fs-1">Dashboard
{{--        <small class="text-muted fs-6 fw-bold ms-1 pt-1">You’ve got 24 New Sales</small>--}}
    </h1>
@endsection

@section('content')
    <div class="page d-flex flex-row flex-column-fluid">
        @include('layouts.navigation')
    </div>
@endsection
