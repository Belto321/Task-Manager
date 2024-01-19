<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class dbSeeder extends Seeder
{
    public function run(): void
    {
        Task::create([
            'name' => 'Check Email',
        ]);

        Task::create([
            'name' => 'Morning Routine',
        ]);
        Task::create([
            'name' => 'Exercise',
        ]);

        Task::create([
            'name' => 'Meal Preparation',
        ]);

        Task::create([
            'name' => 'House Chores',
        ]);

        Task::create([
            'name' => 'Check The News',
        ]);
    }
}
