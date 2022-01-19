<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Characteristic extends Model
{
    protected $table = 'imb_imovelcaracteristica';

    use HasFactory;

    protected $fillable = ['CODIGOIMOVEL', 'CODIGOCARACTERISTICA'];

    public function buildings()
    {
        return $this->belongsToMany(Building::class);
    }
}
