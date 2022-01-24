<?php

namespace Database\Factories;

use App\Models\Building;
use App\Models\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

class CharacteristicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description' => $this->faker->text(100),
        ];
    }
}
