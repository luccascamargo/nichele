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
                    <a href="{{route('cms.caracteristicas.create')}}" class="btn btn-light-primary me-3">
                        <i class="fas fa-plus"></i>
                        Cadastrar caracteristica
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="dataTables_wrapper dt-bootstrap4 no-footer">
                <div class="table-responsive">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                               <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @forelse($characteristics as $characteristic)
                                <tr>
                                    <td>{{$characteristic->description}}</td>
                                    <td>
                                        <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            Ações
                                            <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                            <div class="menu-item px-3">
                                                <a href="{{route('cms.caracteristicas.edit',$characteristic->id)}}" class="menu-link px-3">Editar</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="{{route('cms.caracteristicas.destroy', $characteristic->id)}}" onclick="event.preventDefault(); document.getElementById('form-delete-{{$characteristic->id}}').submit()" class="menu-link px-3">Excluir</a>
                                                <form action="{{route('cms.caracteristicas.destroy', $characteristic->id)}}" method="post" id="form-delete-{{$characteristic->id}}" class="d-none">
                                                    @csrf
                                                    @method('delete')
                                                </form>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr class="text-center">
                                    <td colspan="7">Não existe nenhum registro de imóveis</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-end mt-5">
                    {{$characteristics->links()}}
                </div>
            </div>
        </div>
    </div>
@endsection
