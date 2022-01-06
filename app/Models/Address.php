<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = ['zipcode','address','neighborhood','complement','city','state','number','long','lat'];

    protected $appends = ['place'];

    public function building()
    {
        return $this->hasOne(Building::class);
    }

    public function contact()
    {
        return $this->hasOne(Contact::class);
    }

    public function getPlaceAttribute()
    {
        return "{$this->attributes['neighborhood']}, {$this->attributes['city']} - {$this->attributes['state']}";
    }
}
