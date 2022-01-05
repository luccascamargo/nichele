<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Address::class)->nullable()->constrained('addresses')->cascadeOnDelete();
            $table->foreignIdFor(\App\Models\Type::class)->nullable()->constrained('types')->cascadeOnDelete();
            $table->enum('type', ['sell','rent', 'both'])->nullable();
            $table->string('name');
            $table->string('email');
            $table->char('phone');
            $table->integer('toilets')->nullable();
            $table->integer('rooms')->nullable();
            $table->integer('suite')->nullable();
            $table->integer('garage')->nullable();
            $table->string('subject')->nullable();
            $table->string('message');
            $table->boolean('term')->default(false);
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
        Schema::dropIfExists('contacts');
    }
}
