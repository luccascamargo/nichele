@extends('layouts.guest')

@section('content')
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
        <div class="d-flex flex-column flex-lg-row-auto w-xl-600px position-xl-relative" style="background-color: #315F98">
            <div class="d-flex flex-column position-xl-fixed top-0 botto-0 w-xl-600px scroll-y">
                <div class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                    <a href="#" class="py-9 mb-5">
                        <img src="{{asset('images/nichele-logo.svg')}}" alt="" class="h-60">
                    </a>

                    <h1 class="fw-bolder fs-2qx pb-5 pb-md-10 text-white">Bem vindo a Nichelle</h1>

                    <p class="fw-bold fs-2 text-white">Acesso ao nosso <br/> sistema corporativo</p>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column flex-lg-row-fluid py-10">
            <div class="d-flex flex-column flex-column-fluid">
                <div class="w-lg-500px p-10 p-lg-15 mx-auto">
                    <form action="{{route('auth.login')}}" method="post" id="kt_sign_in_form" class="form w-100">
                        @csrf
                        <div class="text-center mb-10">
                            <h1 class="text-dark mb-3">Entre na área corporativa</h1>
                        </div>

                        <div class="fv-row mb-10">
                            <label for="email" class="form-label fs-6 fw-bolder text-dark">E-mail</label>
                            <input type="email" name="email" id="email"
                                   class="form-control form-control-lg form-control-solid @error('email') is-invalid @enderror" autocomplete="off">
                            @error('email')
                                <div class="invalid-feedback">
                                    {{$message}}
                                </div>
                            @enderror
                        </div>

                        <div class="fv-row mb-10">
                            <div class="d-flex flex-stack mb-2">
                                <label for="password" class="form-label fw-bolder text-dark fs-6 mb-0">Senha</label>
                                <a href="#" class="link-primary fs-6 fw-bolder">Esqueceu sua senha ?</a>
                            </div>

                            <input type="password" name="password" id="password"
                                   class="form-control form-control-lg form-control-solid @error('password') is-invalid @enderror" autocomplete="off">
                            @error('password')
                                <div class="invalid-feedback">
                                    {{$message}}
                                </div>
                            @enderror
                        </div>

                        <div class="text-center">
                            <button id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
                                <span class="indicator-label">Entrar</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                    <!--begin::Links-->
                    <div class="d-flex flex-center fw-bold fs-6">
                        <a href="{{route('about')}}" class="text-muted text-hover-primary px-2" target="_blank">Sobre</a>
                        <a href="{{route('buildings')}}" class="text-muted text-hover-primary px-2" target="_blank">Imóveis</a>
                        <a href="{{route('contact')}}" class="text-muted text-hover-primary px-2" target="_blank">Contato</a>
                    </div>
                    <!--end::Links-->
                </div>
            </div>
        </div>
    </div>
@endsection
