<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FaqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text('30'),
            'content' => $this->faker->sentence,
            'type' => $this->faker->randomElement(['general','doc','rent','buy','ad'])
        ];
    }
}
