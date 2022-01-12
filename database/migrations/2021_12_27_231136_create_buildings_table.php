<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuildingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buildings', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Address::class)->constrained('addresses')->cascadeOnDelete();
            $table->foreignIdFor(\App\Models\Type::class)->constrained('types')->cascadeOnDelete();
            $table->char('code');
            $table->string('description');
            $table->enum('type', ['sell','rent'])->default('sell');
            $table->double('price', 10,2);
            $table->char('total_area');
            $table->char('private_area');
            $table->integer('toilets');
            $table->integer('rooms');
            $table->integer('suite');
            $table->integer('garage');
            $table->boolean('exclusive')->default(false);
            $table->boolean('plant')->default(false);
            $table->boolean('offer')->default(false);
            $table->boolean('emphasis')->default(false);
            $table->boolean('commercial')->default(false);
            $table->enum('status',['pending','sold','rented', 'cancelled'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buildings');
    }
}
