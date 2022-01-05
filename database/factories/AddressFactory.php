<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'zipcode' => $this->faker->postcode,
            'address' => $this->faker->streetAddress,
            'neighborhood' => $this->faker->name,
            'city' => $this->faker->city,
            'state' => $this->faker->name,
            'long' => $this->faker->longitude,
            'lat' => $this->faker->latitude,
        ];
    }
}
