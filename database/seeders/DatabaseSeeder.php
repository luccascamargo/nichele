<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\Characteristic;
use App\Models\Faq;
use App\Models\Media;
use App\Models\Post;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create([
            'name' => 'Macaw Brasil',
            'email' => 'sites@macawbrasil.com.br',
            'password' => bcrypt('macaw@123')
        ]);

//        Building::factory(100)
//            ->hasAttached(Characteristic::factory(), ['confirmation' => true])
//            ->create();
//        Faq::factory(30)->create();
//        Post::factory(100)->hasMedia(1)->create();

    }
}
