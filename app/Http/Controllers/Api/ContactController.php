<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\RequestCreate;
use App\Models\Address;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function mail(Request $request)
    {
        $data = $request->all();
        
        Mail::send('contact_email',
        array(
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'msg' => $data['message']
            ),
            function($webmail){
                $webmail->from('sitmeddigital@gmail.com'); // trocar
                $webmail->to('allankehl@hotmail.com', 'Nichele')->subject('Contato recebido do site'); // trocar
            }
        );

        return;
    }
}
