<?php

namespace App\Http\Requests\Building;

use Illuminate\Foundation\Http\FormRequest;

class RequestCreate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
//        dd($this->all());
        return [
            'code' => 'required',
            'type_id' => 'required',
            'description' => 'required',
            'type' => 'required',
            'total_area' => 'required',
            'private_area' => 'sometimes',
            'toilets' => 'required',
            'rooms' => 'required',
            'suites' => 'required',
            'garage' => 'required',
            'exclusive' => 'sometimes',
            'plant' => 'sometimes',
            'offer' => 'sometimes',
            'emphasis' => 'sometimes',
            'commercial' => 'sometimes',
            'status' => 'required',
            'address.zipcode' => 'required',
            'address.address' => 'required',
            'address.neighborhood' => 'required',
            'address.number' => 'required',
            'address.complement' => 'sometimes',
            'address.city' => 'required',
            'address.state' => 'required',
            'address.lat' => 'required',
            'address.long' => 'required',
            'characteristics.*' => 'sometimes'
        ];
    }

    public function attributes()
    {
        return [
            'address.zipcode' => 'cep',
            'address.address' => 'endereço',
            'address.neighborhood' => 'bairro',
            'address.complement' => 'complemento',
            'address.city' => 'cidade',
            'address.state' => 'estado',
            'address.lat' => 'latitude',
            'address.long' => 'longitude',
        ];
    }
}
