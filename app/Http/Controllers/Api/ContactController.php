<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\RequestCreate;
use App\Models\Address;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RequestCreate $request)
    {
        $data = $request->validated();

        if(isset($data['address'])) {
            $data['address_id'] = Address::create($data);
        }

        return Contact::create($data);
    }
}
