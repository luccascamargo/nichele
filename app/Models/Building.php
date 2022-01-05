<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    use HasFactory;

    protected $fillable = ['address_id','code', 'type_id', 'description', 'type', 'total_area', 'private_area', 'toilets', 'rooms', 'suites', 'garage', 'exclusive', 'status'];

    protected $casts = [
        'total_area' => 'float',
        'private_area' => 'float',
        'toilets' => 'integer',
        'rooms' => 'integer',
        'suites' => 'integer',
        'garage' => 'integer',
        'exclusive' => 'boolean'
    ];

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function buildingType()
    {
        return $this->belongsTo(Type::class, 'type_id','id');
    }

    public function characteristics()
    {
        return $this->hasMany(Characteristic::class);
    }

    public function scopeWhenWhereType($query, $bool, $type)
    {
        $query->when($bool, function ($query) use ($type) {
            $query->where('type', $type);
        });
    }

    public function scopeWhenWhereBuildingType($query, $bool, $building_type)
    {
        $query->when($bool, function ($query) use ($building_type) {
            $query->whereHas('buildingType', function ($query) use ($building_type) {
                $query->where('name', $building_type);
            });
        });
    }

    public function scopeWhenWhereCity($query, $bool, $city)
    {
        $query->when($bool, function ($query) use ($city) {
            $query->whereHas('address', function ($query) use ($city) {
                $query->where('city', $city);
            });
        });
    }

    public function scopeWhenWhereDistrict($query, $bool, $district)
    {
        $query->when($bool, function ($query) use ($district) {
            $query->whereHas('address', function ($query) use ($district) {
                $query->where('neighborhood', $district);
            });
        });
    }

    public function scopeWhenWherePrice($query, $bool, $price)
    {
        $query->when($bool, function ($query) use ($price) {
            $query->whereHas('characteristics', function ($query) use ($price) {
                $query->where(function ($query) use ($price) {
                    $query->where('name', 'Alugar')->where('price', $price);
                })->orWhere(function ($query) use ($price) {
                    $query->where('name', 'Venda')->where('price', $price);
                });
            });
        });
    }

    public function scopeWhenWhereRooms($query, $bool, $room)
    {
        $query->when($bool, function ($query) use ($room) {
            $query->when($room >= 4, function ($query) use ($room) {
                $query->where('rooms', '>=', 4);
            })->when($room < 4, function ($query) use ($room) {
                $query->where('rooms', $room);
            });
        });
    }

    public function scopeWhenWhereSuites($query, $bool, $suite)
    {
        $query->when($bool, function ($query) use ($suite) {
            $query->when($suite >= 4, function ($query) use ($suite) {
                $query->where('suite', '>=', 4);
            })->when($suite < 4, function ($query) use ($suite) {
                $query->where('suite', $suite);
            });
        });
    }

    public function scopeWhenWhereToilets($query, $bool, $toilet)
    {
        $query->when($bool, function ($query) use ($toilet) {
            $query->when($toilet >= 4, function ($query) use ($toilet) {
                $query->where('toilets', '>=', 4);
            })->when($toilet < 4, function ($query) use ($toilet) {
                $query->where('toilets', $toilet);
            });
        });
    }

    public function scopeWhenWhereGarage($query, $bool, $garage)
    {
        $query->when($bool, function ($query) use ($garage) {
            $query->when($garage >= 4, function ($query) use ($garage) {
                $query->where('garage', '>=', 4);
            })->when($garage < 4, function ($query) use ($garage) {
                $query->where('garage', $garage);
            });
        });
    }

    public function scopeWhenWhereArea($query, $bool, $area)
    {
        $query->when($bool, function ($query) use ($area) {
            $query->where('private_area', 'like', "%{$area}%");
        });
    }

    public function scopeWhenWhereCode($query, $bool, $code)
    {
        $query->when($bool, function($query) use ($code) {
            $query->where('code', $code);
        });
    }

    public function scopeWhenWherePlant($query, $bool, $plant)
    {
        $query->when($bool, function($query) use ($plant) {
            $query->where('plant', $plant);
        });
    }

    public function scopeWhenWhereOffer($query, $bool, $offer)
    {
        $query->when($bool, function($query) use ($offer) {
            $query->where('offer', $offer);
        });
    }

    public function scopeIsPending($query)
    {
        $query->where('status', 'pending');
    }

    public function getTypeAttribute()
    {
        return $this->attributes['type'] == 'rent' ? "Alugar" : 'Venda';
    }
}
