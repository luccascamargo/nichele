<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharacteristicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characteristics', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->timestamps();
        });

        Schema::create('building_characteristic', function(Blueprint $table) {
            $table->foreignIdFor(\App\Models\Building::class)->constrained('buildings')->cascadeOnDelete();
            $table->foreignIdFor(\App\Models\Characteristic::class)->constrained('characteristics')->cascadeOnDelete();
            $table->decimal('price', 10,2)->nullable();
            $table->boolean('confirmation')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('building_characteristic');
        Schema::dropIfExists('characteristics');
    }
}
