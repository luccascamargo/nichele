<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('showForm','login');
    }

    public function showForm()
    {
        return view('auth.login');
    }

    public function login(LoginRequest $request)
    {
        if(Auth::attempt($request->validated())) {
            $request->session()->regenerate();

            return redirect()->intended(route('cms.index'));
        }

        return back()->withErrors(['email' => 'As suas credenciais não existem em nosso banco']);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        return back();
    }
}
