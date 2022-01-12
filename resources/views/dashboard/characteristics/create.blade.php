@extends('layouts.app')

@section('header')
    <h1 class="d-flex flex-column text-dark fw-bolder my-0 fs-1">
        Características
        {{--        <small class="text-muted fs-6 fw-bold ms-1 pt-1">You’ve got 24 New Sales</small>--}}
    </h1>
@endsection

@section('content')
    <div class="card">
        <div class="card-header border-0 pt-6 d-flex justify-content-end">
            <div class="card-toolbar">
                <div class="d-flex justify-content-end">
                    <a href="{{route('cms.caracteristicas.index')}}" class="btn btn-light-danger me-3">
                        <i class="fas fa-times"></i>
                        Voltar
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <form action="{{route('cms.caracteristicas.store')}}" method="post">
                @csrf
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="description" class="form-label">Descrição</label>
                            <input type="text" class="form-control @error('description') is-invalid @enderror" id="description" name="description">
                            @error('description')
                                <div class="invalid-feedback">
                                    {{$message}}
                                </div>
                            @enderror
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary mt-4">Cadastrar</button>
            </form>
        </div>
    </div>
@endsection
