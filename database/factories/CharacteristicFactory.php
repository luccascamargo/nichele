<?php

namespace Database\Factories;

use App\Models\Building;
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
            'building_id' => Building::factory(),
            'description' => $this->faker->randomElement(['Venda','Alugar']),
            'price' => $this->faker->randomFloat(2,0, 1000000),
            'confirmation' => $this->faker->numberBetween(0,1)
        ];
    }
}
