<?php

namespace App\Http\Requests\Contact;

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
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => 'sometimes',
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'building_type' => 'sometimes',
            'toilets' => 'sometimes',
            'rooms' => 'sometimes',
            'suites' => 'sometimes',
            'garage' => 'sometimes',
            'subject' => 'sometimes',
            'message' => 'required',
            'address.*' => 'sometimes',
            'term' => 'required'
        ];
    }
}
