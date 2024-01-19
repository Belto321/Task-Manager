<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Task;
use Illuminate\Database\Seeder;
//use Illuminate\Support\Facades\DB;

class dbSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
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
