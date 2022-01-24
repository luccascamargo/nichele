<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title','slug','content'];

    protected $casts = [
        'created_at' => 'datetime:d/m/Y'
    ];

    public function media()
    {
        return $this->morphOne(Media::class, 'owner');
    }
}
