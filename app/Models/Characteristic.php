<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Characteristic extends Model
{
    use HasFactory;

    protected $fillable = ['building_id','description','price','confirmation'];

    protected $casts = [
        'confirmation' => 'boolean',
        'price' => 'double'
    ];

    public function building()
    {
        return $this->belongsTo(Building::class);
    }
}
