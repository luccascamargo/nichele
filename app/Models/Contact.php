<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['address_id','type_id','type','name','email','phone','toilets','rooms','suites','garage','subject','message','term'];

    protected $casts = [
        'toilets' => 'integer',
        'rooms' => 'integer',
        'suites' => 'integer',
        'garage' => 'integer',
        'term' => 'boolean'
    ];

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
