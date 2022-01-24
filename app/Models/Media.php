<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $fillable = ['name','path','order','default'];

    protected $casts = [
        'order' => 'integer',
        'default' => 'boolean'
    ];

    public function owner()
    {
        return $this->morphTo();
    }
}
