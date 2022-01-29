<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    protected $table = 'IMB_IMOVEL';

    use HasFactory;

    protected $fillable = ['CODIGOIMOVEL', 'ENDERECO', 'CODIGOTIPOIMOVEL',  'ENDERECO',  'NUMERO',  'BAIRRO',  'CIDADE',  'UF', 'DESCRICAOALUGUEL',
        'DESCRICAOVENDA', 'TIPOVENDA',  'TIPOALUGUEL',  'VALORVENDA', 'VALORALUGUEL',  'EDIFICIO',  'AREATOTAL',  'AREAPRIVATIVA',  'QUANTIDADEGARAGEM',
        'QUANTIDADEBANHEIRO', 'QUANTIDADEDORMITORIO',  'DESTAQUEALUGUEL',  'DESTAQUEVENDA',  'IMOVELEXCLUSIVO',  'DATAATUALIZACAO',  'PUBLICAR',
        'CODIGOUF',  'CODIGOCIDADE',  'CODIGOBAIRRO',  'LATITUDEMAPA',  'LONGITUDEMAPA',  'NAOPUBLICARVALOR', 'NAOPUBLICARVALORLOCACAO',  'EXCLUIDO',
        'TIPOIMOVEL',  'CEP',  'ENDERECOVIDEOINTERNET',  'CODIGOEDIFICIO', 'CODIGOCORRETOR',  'ENDERECOFOTO360INTERNET',  'VALORCONDOMINIO',  'VALORIPTU',  'VALORIPTUPARCELA'
    ];

    //protected $fillable = ['address_id','code', 'type_id', 'description', 'type','price', 'total_area', 'private_area', 'toilets', 'rooms', 'suites', 'garage', 'exclusive', 'plant', 'offer', 'emphasis', 'commercial', 'status'];

    // protected $casts = [
    //     'total_area' => 'float',
    //     'private_area' => 'float',
    //     'toilets' => 'integer',
    //     'rooms' => 'integer',
    //     'suites' => 'integer',
    //     'garage' => 'integer',
    //     'exclusive' => 'boolean',
    //     'plant' => 'boolean',
    //     'offer' => 'boolean',
    //     'emphasis' => 'boolean',
    //     'commercial' => 'boolean',
    //     'price' => 'float'
    // ];

    // protected $appends = ['price'];

    // protected $with = ['address', 'buildingType'];

    // public function address()
    // {
    //     return $this->belongsTo(Address::class);
    // }

    // public function buildingType()
    // {
    //     return $this->belongsTo(Type::class, 'type_id','id');
    // }

    // public function characteristics()
    // {
    //     return $this->belongsToMany(Characteristic::class)->select(array('CODIGOIMOVEL'));
    // }

    public function scopeWhenWhereBuildingType($query, $bool, $building_type)
    {
        $query->when($bool, function ($query) use ($building_type) {
            $query->where('TIPOIMOVEL', $building_type);
        });
    }

    public function scopeWhenWhereType($query, $bool, $type)
    {
        if ($type === "TIPOVENDA") {
            $query->when($bool, function ($query) use ($type) {
                $query->where('TIPOVENDA', "S");
            });
        } else {
            $query->when($bool, function ($query) use ($type) {
                $query->where('TIPOALUGUEL', "S");
            });
        }
    }

    public function scopeWhenWhereCity($query, $bool, $city)
    {
        $query->when($bool, function ($query) use ($city) {
            $query->where('CIDADE', $city);
        });
    }

    public function scopeWhenWhereDistrict($query, $bool, $district)
    {
        $query->when($bool, function ($query) use ($district) {
            $query->where('BAIRRO', $district);
        });
    }

    public function scopeWhenWherePrice($query, $bool, $price)
    {
        $price = json_decode($price, true);

        $query->when($bool, function ($query) use ($price) {
            $query->where(function ($query) use ($price) {
                $query->where('TIPOVENDA', 'S')->whereBetween('VALORVENDA', [$price['min'], $price['max']]);
            })->orWhere(function ($query) use ($price) {
                $query->where('TIPOALUGUEL', 'S')->whereBetween('VALORALUGUEL', [$price['min'], $price['max']]);
            });
        });
    }

    public function scopeWhenWhereRooms($query, $bool, $room)
    {
        $query->when($bool, function ($query) use ($room) {
            $query->when($room >= 4, function ($query) use ($room) {
                $query->where('QUANTIDADEDORMITORIO', '>=', 4);
            })->when($room < 4, function ($query) use ($room) {
                $query->where('QUANTIDADEDORMITORIO', $room);
            });
        });
    }

    // public function scopeWhenWhereSuites($query, $bool, $suite)
    // {
    //     $query->when($bool, function ($query) use ($suite) {
    //         $query->when($suite >= 4, function ($query) use ($suite) {
    //             $query->where('suite', '>=', 4);
    //         })->when($suite < 4, function ($query) use ($suite) {
    //             $query->where('suite', $suite);
    //         });
    //     });
    // }

    public function scopeWhenWhereToilets($query, $bool, $toilet)
    {
        $query->when($bool, function ($query) use ($toilet) {
            $query->when($toilet >= 4, function ($query) use ($toilet) {
                $query->where('QUANTIDADEBANHEIRO', '>=', 4);
            })->when($toilet < 4, function ($query) use ($toilet) {
                $query->where('QUANTIDADEBANHEIRO', $toilet);
            });
        });
    }

    public function scopeWhenWhereGarage($query, $bool, $garage)
    {
        $query->when($bool, function ($query) use ($garage) {
            $query->when($garage >= 4, function ($query) use ($garage) {
                $query->where('QUANTIDADEGARAGEM', '>=', 4);
            })->when($garage < 4, function ($query) use ($garage) {
                $query->where('QUANTIDADEGARAGEM', $garage);
            });
        });
    }

    public function scopeWhenWhereArea($query, $bool, $area)
    {
        $area = json_decode($area, true);

        $query->when($bool, function ($query) use ($area) {
            $query->whereBetween('AREAPRIVATIVA',[$area['min'], $area['max']]);
        });
    }

    public function scopeWhenWhereCode($query, $bool, $code)
    {
        $query->when($bool, function($query) use ($code) {
            $query->where('CODIGOIMOVEL', $code);
        });
    }


    // public function scopeWhenWherePlant($query, $bool, $plant)
    // {
    //     $query->when($bool, function($query) use ($plant) {
    //         $query->where('plant', $plant);
    //     });
    // }

    public function scopeIsPending($query)
    {
        $query->where('PUBLICAR', '1');
    }

    // public function getTypeAttribute()
    // {
    //     return $this->attributes['type'] == 'rent' ? "Alugar" : 'Venda';
    // }

    // public function getPriceAttribute()
    // {
    //     $fmt = numfmt_create('pt-br',\NumberFormatter::CURRENCY);

    //     return numfmt_format_currency($fmt, $this->characteristics->whereIn('description', ['Venda','Alugar'])->first()->price, 'BRL');
    // }
}
