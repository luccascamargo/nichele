<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = ['zipcode','address','neighborhood','complement','city','state','number','long','lat'];

    public function building()
    {
        return $this->hasOne(Building::class);
    }

    public function contact()
    {
        return $this->hasOne(Contact::class);
    }
}
