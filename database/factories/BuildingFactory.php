<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

class BuildingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $total = $this->faker->randomFloat(2);
        return [
            'address_id' => Address::factory(),
            'type_id' => Type::factory(),
            'code' => $this->faker->numberBetween(100,15000),
            'description' => $this->faker->sentence,
            'type' => $this->faker->randomElement(['sell','rent','both']),
            'total_area' => $total,
            'private_area' => $this->faker->randomFloat(2,1000,$total),
            'toilets' => $this->faker->numberBetween(1, 10),
            'rooms' => $this->faker->numberBetween(1, 10),
            'suite' => $this->faker->numberBetween(1, 10),
            'garage' => $this->faker->numberBetween(1, 10),
            'status' => $this->faker->randomElement(['pending','sold','rented','cancelled'])
        ];
    }
}
