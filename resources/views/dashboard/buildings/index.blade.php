@extends('layouts.app')

@section('header')
    <h1 class="d-flex flex-column text-dark fw-bolder my-0 fs-1">
        Imóveis
        {{--        <small class="text-muted fs-6 fw-bold ms-1 pt-1">You’ve got 24 New Sales</small>--}}
    </h1>
@endsection

@section('content')
    <div class="card">
        <div class="card-header border-0 pt-6 d-flex justify-content-end">
            <div class="card-toolbar">
                <div class="d-flex justify-content-end">
                    <a href="{{route('cms.imoveis.create')}}" class="btn btn-light-primary me-3">
                        <i class="fas fa-plus"></i>
                        Cadastrar imóvel
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
                                <th>Código</th>
                                <th>Tipo</th>
                                <th>Venda/Aluguel</th>
                                <th>Em oferta</th>
                                <th>Na Planta</th>
                                <th>Comercial</th>
                                <th>Destaque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @forelse($buildings as $building)
                                <tr>
                                    <td>{{$building->code}}</td>
                                    <td>{{$building->buildingType->name}}</td>
                                    <td>{{$building->type}}</td>
                                    <td>
                                        <div class="badge badge-light-{{$building->offer ? 'success' : 'danger'}}">{{$building->offer ? 'Sim' : 'Não'}}</div>
                                    </td>
                                    <td>
                                        <div class="badge badge-light-{{$building->plant ? 'success' : 'danger'}}">{{$building->plant ? 'Sim' : 'Não'}}</div>
                                    </td>
                                    <td>
                                        <div class="badge badge-light-{{$building->commercial ? 'success' : 'danger'}}">{{$building->commercial ? 'Sim' : 'Não'}}</div>
                                    </td>
                                    <td>
                                        <div class="badge badge-light-{{$building->emphasis ? 'success' : 'danger'}}">{{$building->emphasis ? 'Sim' : 'Não'}}</div>
                                    </td>
                                    <td>
                                        <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            Ações
                                            <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3">Editar</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="{{route('cms.imoveis.destroy', $building->id)}}" onclick="event.preventDefault(); document.getElementById('form-delete-{{$building->id}}').submit()" class="menu-link px-3">Excluir</a>
                                                <form action="{{route('cms.imoveis.destroy', $building->id)}}" id="form-delete-{{$building->id}}" class="d-none"></form>
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
                    {{$buildings->links()}}
                </div>
            </div>
        </div>
    </div>
@endsection
