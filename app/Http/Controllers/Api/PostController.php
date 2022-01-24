<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::with('media')->paginate(9);
    }

    public function show(Post $post)
    {
        return $post->load('media');
    }
}
