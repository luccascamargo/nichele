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
                    <a href="{{route('cms.imoveis.index')}}" class="btn btn-light-danger me-3">
                        <i class="fas fa-times"></i>
                        Voltar
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <form action="{{route('cms.imoveis.store')}}" method="post">
                @csrf
                <ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
                    <li class="nav-item">
                        <a href="#addresses" data-bs-toggle="tab" class="nav-link active">Endereço</a>
                    </li>
                    <li class="nav-item">
                        <a href="#information" data-bs-toggle="tab" class="nav-link">Informações</a>
                    </li>
                    <li class="nav-item">
                        <a href="#characteristics" data-bs-toggle="tab" class="nav-link">Caracteristicas</a>
                    </li>
                </ul>
                <div class="tab-content" id="tab-building">
                    <div class="tab-pane fade active show" id="addresses" role="tabpanel">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="zipcode" class="form-label">CEP</label>
                                    <input type="text"
                                           class="form-control @error('address.zipcode') is-invalid @enderror"
                                           id="zipcode" value="{{old('address.zipcode')}}" name="address[zipcode]">
                                    @error('address.zipcode')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="address" class="form-label">Endereço</label>
                                    <input type="text"
                                           class="form-control @error('address.address') is-invalid @enderror"
                                           id="address" value="{{old('address.address')}}" name="address[address]">
                                    @error('address.address')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="neighbordhood" class="form-label">Bairro</label>
                                    <input type="text"
                                           class="form-control @error('address.neighborhood') is-invalid @enderror"
                                           id="neighborhood" value="{{old('address.neighborhood')}}" name="address[neighborhood]">
                                    @error('address.neighborhood')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="complement" class="form-label">Número</label>
                                    <input type="text"
                                           class="form-control @error('address.number') is-invalid @enderror"
                                           id="number" value="{{old('address.number')}}" name="address[number]">
                                    @error('address.number')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="complement" class="form-label">Complemento</label>
                                    <input type="text"
                                           class="form-control @error('address.complement') is-invalid @enderror"
                                           id="complement" value="{{old('address.complement')}}" name="address[complement]">
                                    @error('address.complement')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="city" class="form-label">Cidade</label>
                                    <input type="text" class="form-control @error('address.city') is-invalid @enderror"
                                           id="city" value="{{old('address.city')}}" name="address[city]">
                                    @error('address.city')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="state" class="form-label">Estado</label>
                                    <input type="text" class="form-control @error('address.state') is-invalid @enderror"
                                           id="state" value="{{old('address.state')}}" name="address[state]">
                                    @error('address.state')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="lat" class="form-label">Latitude</label>
                                    <input type="text" class="form-control @error('address.lat') is-invalid @enderror"
                                           id="lat" value="{{old('address.lat')}}" name="address[lat]">
                                    @error('address.lat')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="long" class="form-label">Longitude</label>
                                    <input type="text" class="form-control @error('address.long') is-invalid @enderror"
                                           id="long" value="{{old('address.long')}}" name="address[long]">
                                    @error('address.long')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="information">
                        <div class="row">
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="code" class="form-label">Código</label>
                                    <input type="text" class="form-control @error('code') is-invalid @enderror"
                                           id="code" name="code">
                                    @error('code')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="type_id" class="form-label">Tipo do imóvel</label>
                                    <select name="type_id" id="type_id"
                                            class="form-select @error('type_id') is-invalid @enderror">
                                        <option value="" selected>Selecione</option>
                                        @foreach($types as $type)
                                            <option value="{{$type->id}}">{{$type->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('type_id')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="type" class="form-label">Tipo de oferta</label>
                                    <select name="type" id="type"
                                            class="form-select @error('type') is-invalid @enderror">
                                        <option value="" selected>Selecione</option>
                                        <option value="buy">Venda</option>
                                        <option value="rent">Aluguel</option>
                                    </select>
                                    @error('type')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="price" class="form-label">Valor</label>
                                    <input type="text" class="form-control @error('price') is-invalid @enderror"
                                           id="price" name="price">
                                </div>
                                @error('price')
                                <div class="invalid-feedback">
                                    {{$message}}
                                </div>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <label for="description" class="form-label">Descrição</label>
                            <textarea name="description" id="description" cols="30" rows="5"
                                      class="form-control @error('description') is-invalid @enderror"></textarea>
                            @error('description')
                            <div class="invalid-feedback">
                                {{$message}}
                            </div>
                            @enderror
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="total_area" class="form-label">Área total</label>
                                    <input type="text" class="form-control @error('total_area') is-invalid @enderror"
                                           id="total_area" name="total_area">
                                    @error('total_area')
                                    <div class="invalid-feedback">
                                        {{$message}}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="private_area" class="form-label">Àrea privada</label>
                                    <input type="text" class="form-control" id="private_area" name="private_area">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="rooms" class="form-label">Quantidade de quartos</label>
                                    <input type="number" value="1" min="1" name="rooms" id="rooms" class="form-control">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="suites" class="form-label">Quantidade de suites</label>
                                    <input type="number" value="1" min="1" name="suites" id="suites"
                                           class="form-control">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="toilets" class="form-label">Quantidade de banheiros</label>
                                    <input type="number" value="1" min="1" name="toilets" id="toilets"
                                           class="form-control">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="garage" class="form-label">Quantidade de vagas</label>
                                    <input type="number" value="1" min="1" name="garage" id="garage"
                                           class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-3">
                                <div class="form-check form-switch form-check-custom form-check-solid me-10">
                                    <input type="checkbox" name="plant" id="plant"
                                           class="form-check-input h-20px w-30px">
                                    <label for="plant" class="form-check-label">Na planta</label>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-check form-switch form-check-custom form-check-solid me-10">
                                    <input type="checkbox" name="plant" id="commercial"
                                           class="form-check-input h-20px w-30px">
                                    <label for="commercial" class="form-check-label">Comercial</label>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-check form-switch form-check-custom form-check-solid me-10">
                                    <input type="checkbox" name="offer" id="offer"
                                           class="form-check-input h-20px w-30px">
                                    <label for="offer" class="form-check-label">Em oferta</label>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-check form-switch form-check-custom form-check-solid me-10">
                                    <input type="checkbox" name="plant" id="emphasis"
                                           class="form-check-input h-20px w-30px">
                                    <label for="emphasis" class="form-check-label">Em destaque</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <label for="status" class="form-label">Status</label>
                            <select name="status" id="status" class="form-select @error('status') is-invalid @enderror">
                                <option value="" selected>Selecione</option>
                                <option value="pending">Pendente</option>
                                <option value="sold">Vendido</option>
                                <option value="rented">Alugado</option>
                                <option value="cancelled">Cancelado</option>
                            </select>
                            @error('status')
                            <div class="invalid-feedback">
                                {{$message}}
                            </div>
                            @enderror
                        </div>
                    </div>
                    <div class="tab-pane fade" id="characteristics">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Selecionar</th>
                                <th>Nome</th>
                                <th>Confirmar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($characteristics as $characteristic)
                                <tr>
                                    <td>
                                        <div class="form-check form-check-custom form-check-solid">
                                            <input type="checkbox" name="characteristics[{{$characteristic->id}}][id]"
                                                   value="{{$characteristic->id}}" id="checkbox-{{$characteristic->id}}"
                                                   class="form-check-input">
                                        </div>
                                    </td>
                                    <td>
                                        <label
                                            for="checkbox-{{$characteristic->id}}">{{$characteristic->description}}</label>
                                    </td>
                                    <td>
                                        <div
                                            class="form-check mt-7 form-switch form-check-custom form-check-solid me-10">
                                            <input class="form-check-input h-20px w-30px" type="checkbox"
                                                   name="characteristics[{{$characteristic->id}}][confirmation]"
                                                   id="confirmation-{{$characteristic->id}}"/>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
                <button class="btn btn-primary mt-4">Cadastrar</button>
            </form>
        </div>
    </div>
    @push('script')
        <script>
            Inputmask({
                mask: "99999-999"
            }).mask('#zipcode')
            Inputmask({
                mask: "9",
                repeat: 10,
                greedy: false
            }).mask('#code')
            Inputmask('currency', {
                prefix: "R$ ",
                radixPoint: ',',
                autoGroup: true,
                rightAlign: true
            }).mask('#price')
            Inputmask('decimal', {
                groupSeparator: ',',
                radixPoint: ',',
                digits: 2
            }).mask('#total_area')
            Inputmask('decimal', {
                groupSeparator: ',',
                radixPoint: ',',
                digits: 2
            }).mask('#private_area')

            document.getElementById('zipcode').addEventListener('change', function() {
                fetch(`https://viacep.com.br/ws/${this.value}/json/`).then(r => r.json()).then(result => {
                    console.log(result.logradouro, document.getElementById('address').value)
                    document.getElementById('address').value = result.logradouro
                    document.getElementById('neighborhood').value = result.bairro
                    document.getElementById('city').value = result.localidade
                    document.getElementById('state').value = result.uf
                    document.getElementById('complement').value = result.complemento
                })
            })
        </script>
    @endpush
@endsection
